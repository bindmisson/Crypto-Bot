import os,time,json, sys
# try:
import ccxt
# except:
    # os.system("pip install ccxt")
# try:
import ta
# except:
#     os.system("pip install ta")
# try:
import pandas as pd
# except:
    # os.system("pip install pandas")
# try:
import chime
# except:
#     os.system("pip install chime")

# impo
from ta.momentum import RSIIndicator

print('Starting Script')
sys.stdout.flush()
with open('config.json') as f:
    veri = json.load(f)

# API CONNECT
exchange = ccxt.binance({
"apiKey": veri["apiKey"],
"secret": veri["secretKey"],
'options': {
'defaultType': 'future'
},
'enableRateLimit': True
})

#ATTRIBUTES
first = True
tradeCount = 0
highestPrice = 0
lowestPrice = 0
buyPrice = 0
eskiAsset = "99999"
complatedTradeAmount = 0

with open('tradeUpdate.json', 'w') as f2:
    json.dump({"In Long Position":"kl"}, f2)

while True:
    try:

        asset = veri["asset"].upper() # without /USDT, only symbol (BTC, ETH, LTC...)
        symbol = asset+"/USDT"
        leverage = int(veri["leverage"])
        timeFrame = veri["timeFrame"]
        responseLeverage = exchange.set_leverage(leverage, symbol) # set leverage
        marginMode = veri["marginMode"].upper()
        if eskiAsset != asset:
            eskiAsset = asset
            try:
                responseMargin = exchange.set_margin_mode(marginMode, symbol) # set magin mode
            except:
                continue

        rsiLength = int(veri["rsiLength"])
        rsiUpper = int(veri["rsiUpper"])
        rsiLower = int(veri["rsiLower"])
        baseOrderSize = float(veri["baseOrderSize"])
        maxTradeCount = int(veri["maxTradeCount"])
        safetyOrderVolumeScale = float(veri["safetyOrderVolumeScale"])
        safetyOrderStep = float(veri["safetyOrderStep"])
        takeProfit = float(veri["takeProfit"])

        balance = exchange.fetch_balance()
        free_balance = exchange.fetch_free_balance()
        totalMoney = float(balance['total']["USDT"])
        positions = balance['info']['positions']
        newSymbol = asset+"USDT"
        current_positions = [position for position in positions if float(position['positionAmt']) != 0 and position['symbol'] == newSymbol]
        position_info = pd.DataFrame(current_positions, columns=["symbol", "entryPrice", "unrealizedProfit", "isolatedWallet", "positionAmt", "positionSide"])

        # in position?
        if not position_info.empty and position_info["positionAmt"][len(position_info.index) - 1] != 0:
            inPosition = True
        else:
            inPosition = False
            longPosition = False
            shortPosition = False

        # in long position?
        if not position_info.empty and float(position_info["positionAmt"][len(position_info.index) - 1]) > 0:
            longPosition = True
            shortPosition = False
        # in short position?
        if not position_info.empty and float(position_info["positionAmt"][len(position_info.index) - 1]) < 0:
            shortPosition = True
            longPosition = False

        # LOAD BARS
        bars = exchange.fetch_ohlcv(symbol, timeframe=timeFrame, since = None, limit = 500)
        df = pd.DataFrame(bars, columns=["timestamp", "open", "high", "low", "close", "volume"])

        # Get current price
        currentPrice = float(df["close"][len(df.index) - 1])

        ############################### CALCULATE INDICATORS ###############################

        # Calculate rsi
        rsi = RSIIndicator(df["close"], rsiLength)
        df["rsi"] = rsi.rsi()

        ###################################################################################
        # limit LONG ENTER
        def limitLongEnter(alinacak_miktar, longPrice):
            order = exchange.create_limit_buy_order (symbol, alinacak_miktar, longPrice)

        # market LONG ENTER
        def marketLongEnter(alinacak_miktar):
            order = exchange.create_market_buy_order (symbol, alinacak_miktar)

        # LONG EXIT
        def longExit():
            order = exchange.create_market_sell_order(symbol, float(position_info["positionAmt"][len(position_info.index) - 1]), {"reduceOnly": True})

        # limit SHORT ENTER
        def limitShortEnter(alinacak_miktar, shortPrice):
            order = exchange.create_limit_sell_order (symbol, alinacak_miktar, shortPrice)

        # market SHORT ENTER
        def marketShortEnter(alinacak_miktar):
            order = exchange.create_market_sell_order (symbol, alinacak_miktar)

        # SHORT EXIT
        def shortExit():
            order = exchange.create_market_buy_order(symbol, (float(position_info["positionAmt"][len(position_info.index) - 1]) * -1), {"reduceOnly": True})

        ###################################################################################

        # LONG ENTER
        if inPosition == False and  float(free_balance["USDT"]) >= baseOrderSize:
            if tradeCount == 0:
                safetyOrderSize = baseOrderSize
                alinacak_miktar = (baseOrderSize * float(leverage)) / float(df["close"][len(df.index) - 1])
                marketLongEnter(alinacak_miktar)

            print("LONG ENTER")
            sys.stdout.flush()


        ###################################################################################

        # LONG TAKE PROFIT
        if longPosition and ((float(position_info["entryPrice"][len(position_info.index) - 1]) / 100) * takeProfit) + float(position_info["entryPrice"][len(position_info.index) - 1]) <= currentPrice: # a sayısını %b arttırırsak= ((A / 100) x B) + A
            print("TAKE PROFIT")
            sys.stdout.flush()
            exchange.cancel_all_orders(symbol)
            longExit()
            first = True
            tradeCount = 0
            complatedTradeAmount = complatedTradeAmount + 1
            chime.success()

        ###################################################################################
        os.system("cls")
            
        print("============= INFORMATIONS =============")
            
        if longPosition:
            print("In Long Position")
            print("TakeProfit Price:",((float(position_info["entryPrice"][len(position_info.index) - 1]) / 100) * takeProfit) + float(position_info["entryPrice"][len(position_info.index) - 1]))
            with open('tradeUpdate.json', 'w') as f2:
                json.dump({"In Long Position":"kl"}, f2)
            sys.stdout.flush()
        if shortPosition:
            print("In Short Position")
            print("TakeProfit Price:", float(position_info["entryPrice"][len(position_info.index) - 1]) - (float(position_info["entryPrice"][len(position_info.index) - 1]) / 100) * takeProfit)
        print("RSI value of last closed candle:", round(df["rsi"][len(df.index) - 2], 2))
        print("Complated Trade Amount:", complatedTradeAmount,"\nTotal Usdt:", totalMoney)
        print("========================================")
        sys.stdout.flush()
        time.sleep(1)
    except ccxt.BaseError as Error:
        print ("[ERROR] ", Error )
        sys.stdout.flush()
        continue
