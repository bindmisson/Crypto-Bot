import React, {useState} from 'react'
import './Settings.css'
import {FaRobot} from 'react-icons/fa'
import {MdEdit} from 'react-icons/md'

function Settings() {

  const [botLoaded, setbotLoaded] = useState(false)
  const [bot, setbot] = useState('')

  async function getBot(){
    const response= await fetch(`http://192.168.0.5:8080/get-bot?key=${document.cookie.slice(4)}`)
    const data=await response.json()
    setbotLoaded(true)
    setbot(data)
  }
  getBot()
  const assets=["BTC","LTC","ETH","NEO","BNB","QTUM","EOS","SNT","BNT","GAS","BCC","USDT","HSR","OAX","DNT","MCO","ICN","ZRX","OMG","WTC","YOYO","LRC","TRX","SNGLS","STRAT","BQX","FUN","KNC","CDT","XVG","IOTA","SNM","LINK","CVC","TNT","REP","MDA","MTL","SALT","NULS","SUB","STX","MTH","ADX","ETC","ENG","ZEC","AST","GNT","DGD","BAT","DASH","POWR","BTG","REQ","XMR","EVX","VIB","ENJ","VEN","ARK","XRP","MOD","STORJ","KMD","RCN","EDO","DATA","DLT","MANA","PPT","RDN","GXS","AMB","ARN","BCPT","CND","GVT","POE","BTS","FUEL","XZC","QSP","LSK","BCD","TNB","ADA","LEND","XLM","CMT","WAVES","WABI","GTO","ICX","OST","ELF","AION","WINGS","BRD","NEBL","NAV","VIBE","LUN","TRIG","APPC","CHAT","RLC","INS","PIVX","IOST","STEEM","NANO","AE","VIA","BLZ","SYS","RPX","NCASH","POA","ONT","ZIL","STORM","XEM","WAN","WPR","QLC","GRS","CLOAK","LOOM","BCN","TUSD","ZEN","SKY","THETA","IOTX","QKC","AGI","NXS","SC","NPXS","KEY","NAS","MFT","DENT","IQ","ARDR","HOT","VET","DOCK","POLY","VTHO","ONG","PHX","HC","GO","PAX","RVN","DCR","USDC","MITH","BCHABC","BCHSV","REN","BTT","USDS","FET","TFUEL","CELR","MATIC","ATOM","PHB","ONE","FTM","BTCB","USDSB","CHZ","COS","ALGO","ERD","DOGE","BGBP","DUSK","ANKR","WIN","TUSDB","COCOS","PERL","TOMO","BUSD","BAND","BEAM","HBAR","XTZ","NGN","DGB","NKN","GBP","EUR","KAVA","RUB","UAH","ARPA","TRY","CTXC","AERGO","BCH","TROY","BRL","VITE","FTT","AUD","OGN","DREP","BULL","BEAR","ETHBULL","ETHBEAR","XRPBULL","XRPBEAR","EOSBULL","EOSBEAR","TCT","WRX","LTO","ZAR","MBL","COTI","BKRW","BNBBULL","BNBBEAR","HIVE","STPT","SOL","IDRT","CTSI","CHR","BTCUP","BTCDOWN","HNT","JST","FIO","BIDR","STMX","MDT","PNT","COMP","IRIS","MKR","SXP","SNX","DAI","ETHUP","ETHDOWN","ADAUP","ADADOWN","LINKUP","LINKDOWN","DOT","RUNE","BNBUP","BNBDOWN","XTZUP","XTZDOWN","AVA","BAL","YFI","SRM","ANT","CRV","SAND","OCEAN","NMR","LUNA","IDEX","RSR","PAXG","WNXM","TRB","EGLD","BZRX","WBTC","KSM","SUSHI","YFII","DIA","BEL","UMA","EOSUP","TRXUP","EOSDOWN","TRXDOWN","XRPUP","XRPDOWN","DOTUP","DOTDOWN","NBS","WING","SWRV","LTCUP","LTCDOWN","CREAM","UNI","OXT","SUN","AVAX","BURGER","BAKE","FLM","SCRT","XVS","CAKE","SPARTA","UNIUP","UNIDOWN","ALPHA","ORN","UTK","NEAR","VIDT","AAVE","FIL","SXPUP","SXPDOWN","INJ","FILDOWN","FILUP","YFIUP","YFIDOWN","CTK","EASY","AUDIO","BCHUP","BCHDOWN","BOT","AXS","AKRO","HARD","KP3R","RENBTC","SLP","STRAX","UNFI","CVP","BCHA","FOR","FRONT","ROSE","HEGIC","AAVEUP","AAVEDOWN","PROM","BETH","SKL","GLM","SUSD","COVER","GHST","SUSHIUP","SUSHIDOWN","XLMUP","XLMDOWN","DF","JUV","PSG","BVND","GRT","CELO","TWT","REEF","OG","ATM","ASR","1INCH","RIF","BTCST","TRU","DEXE","CKB","FIRO","LIT","PROS","VAI","SFP","FXS","DODO","AUCTION","UFT","ACM","PHA","TVK","BADGER","FIS","OM","POND","ALICE","DEGO","BIFI","LINA"]

  const [botSelected, setbotSelected] = useState('')

  async function setBotAtServer(){
    if (botSelected!=''){
      const response = await fetch(`http://192.168.0.5:8080/set-bot?key=${document.cookie.slice(4)}&bot=${botSelected}`)
      const data = await response.json()
      if (data=='1'){
        alert('Bot Updated Successfully')
      }else{
        alert('Some Error Occured')
      }
      setbotSelected('')
    }
  }

  async function getAPISettings(){
    const response=await fetch('http://192.168.0.5:8080/get-api-settings')
    const data=await response.json()
    console.log(data)
    document.getElementById('api-key-input').defaultValue=data.apiKey
    document.getElementById('api-secret-input').defaultValue=data.secretKey
    document.getElementById('api-leverage-input').defaultValue=data.leverage
    document.getElementById('baseOrderSize').defaultValue=data.baseOrderSize
    document.getElementById('maxTradeCount').defaultValue=data.maxTradeCount
    document.getElementById('rsiLength').defaultValue=data.rsiLength
    document.getElementById('rsiUpper').defaultValue=data.rsiUpper
    document.getElementById('rsiLower').defaultValue=data.rsiLower
    document.getElementById('safetyOrderStep').defaultValue=data.safetyOrderStep
    document.getElementById('safetyOrderVolumeScale').defaultValue=data.safetyOrderVolumeScale
    document.getElementById('takeProfit').defaultValue=data.takeProfit
    document.getElementById('time-frame').defaultValue=data.timeFrame
    if (data.marginMode.toString()=="CROSS"){
      document.getElementById('cross-margin-mode').checked=true
    }else{
      document.getElementById('isolated-margin-mode').checked=true
    }
    document.getElementById(data.asset).selected=true
  }
  getAPISettings()

  async function setAPISettings(){
    const apiKey=document.getElementById('api-key-input').value
    const secretKey=document.getElementById('api-secret-input').value
    const leverage=document.getElementById('api-leverage-input').value
    const baseOrderSize=document.getElementById('baseOrderSize').value
    const maxTradeCount=document.getElementById('maxTradeCount').value
    const rsiLength=document.getElementById('rsiLength').value
    const rsiUpper=document.getElementById('rsiUpper').value
    const rsiLower=document.getElementById('rsiLower').value
    const safetyOrderStep=document.getElementById('safetyOrderStep').value
    const takeProfit=document.getElementById('takeProfit').value
    const timeFrame=document.getElementById('time-frame').value.toString()+"m"
    const safetyOrderVolumeScale=document.getElementById('safetyOrderVolumeScale').value
    let marginMode=""
    let asset=""
    if (document.getElementsByName('margin')[0].checked){
      marginMode="CROSS"
    }else{
      marginMode="ISOLATED"
    }
    for (let i of document.getElementsByName('asset')){
      if (i.selected){
        asset=i.innerHTML
      }
    }

    await fetch('http://192.168.0.5:8080/set-api-settings', {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({'apiKey':apiKey, 'secretKey':secretKey, 'asset':asset, 'leverage':leverage, 'marginMode':marginMode, 'baseOrderSize':baseOrderSize, 'maxTradeCount':maxTradeCount, 'rsiLength':rsiLength, 'rsiUpper':rsiUpper, 'rsiLower':rsiLower, 'safetyOrderStep':safetyOrderStep, 'takeProfit':takeProfit, 'timeFrame':timeFrame, 'safetyOrderVolumeScale':safetyOrderVolumeScale})
    })
  }

  return (
      <div className="settings">
        <div className="licenseHeader trxn-header">
              <h2 className="licenseHeading trxn-heading">
                Settings
              </h2>
              <span className="current-license">
              <FaRobot className='robot-icon' />&nbsp;&nbsp;Bot Selected :&nbsp; <b className='bot-name'> {botLoaded ? bot:''}</b>
              </span>
          </div>
          <div className="settings-inner-div">
            <div className="bot-settings">
              <h2 className="bot-settings-heading">Bot Settings</h2><br />
              <div className="bots-list">
                <div className="bot-item">
                  <h6 className="bot-item-heading">Magic Bot</h6>
                  <input type="radio" name="bot" id="" className="bot-item-radio" onClick={()=>{setbotSelected('Magic Bot'); document.getElementById('choose-bot-btn').disabled=false; document.getElementById('choose-bot-btn').onClick=setBotAtServer}} />
                </div>
                <div className="bot-item">
                  <h6 className="bot-item-heading">DCA Bot</h6>
                  <input type="radio" name="bot" id="" className="bot-item-radio" onClick={()=>{setbotSelected('DCA Bot'); document.getElementById('choose-bot-btn').disabled=false; document.getElementById('choose-bot-btn').onClick=setBotAtServer}} />
                </div>
                <div className="bot-item">
                  <h6 className="bot-item-heading">SMA Bot</h6>
                  <input type="radio" name="bot" id="" className="bot-item-radio" onClick={()=>{setbotSelected('SMA Bot'); document.getElementById('choose-bot-btn').disabled=false; document.getElementById('choose-bot-btn').onClick=setBotAtServer}} />
                </div>
                <div className="bot-item">
                  <h6 className="bot-item-heading">RSI Bot</h6>
                  <input type="radio" name="bot" id="" className="bot-item-radio" onClick={()=>{setbotSelected('RSI Bot'); document.getElementById('choose-bot-btn').disabled=false; document.getElementById('choose-bot-btn').onClick=setBotAtServer}} />
                </div>
              </div>
              <button disabled className='choose-bot-btn' id='choose-bot-btn' onClick={setBotAtServer} >Choose Bot</button>
            </div>
            <div className="api-settings">
              <h6 className="bot-settings-heading api-settings-heading">API Settings</h6><br />
              <div className="api-setings-innerdivs">
              <label htmlFor="" className="api-settings-label">Your API Key </label>
              <input type="text" placeholder='API Key' className='api-input long-input' id='api-key-input' name='api' readOnly={true} />
              <MdEdit className='edit-icon' onClick={()=>{document.getElementById('api-key-input').readOnly=false; document.getElementById('api-key-input').focus(); document.getElementById('api-settings-btn').disabled=false}} /><br />
              </div>
              <div className="api-setings-innerdivs">
              <label htmlFor="" className="api-settings-label">Your Secret Key </label>
              <input type="text" placeholder='Secret Key' className='api-input long-input' id='api-secret-input' name='secretKey' readOnly={true} />
              <MdEdit className='edit-icon' onClick={()=>{document.getElementById('api-secret-input').readOnly=false; document.getElementById('api-secret-input').focus(); document.getElementById('api-settings-btn').disabled=false}} /><br />
              </div>
              <div className="api-setings-innerdivs">
              <label htmlFor="" className="api-settings-label">Asset </label>
              {/* <input type="text" placeholder='API Key' className='api-input' id='api-key-input' name='api' defaultValue='skdj8sd798' readOnly={false} /> */}
              
              <select name="asset" id="asset-select" className="asset-select api-input" disabled>
                {assets.map((i)=>{
                  return <option id={i} name="asset" className="option">{i}</option>
                })}
              </select>
              <MdEdit className='edit-icon' onClick={()=>{document.getElementById('asset-select').disabled=false; document.getElementById('asset-select').focus(); document.getElementById('api-settings-btn').disabled=false}} /><br />
                </div>
              <div className="api-setings-innerdivs">
              <label htmlFor="" className="api-settings-label">Leverage </label>
              <input type="number" placeholder='Leverage (Eg. 5x)' className='api-input' id='api-leverage-input' name='leverage' defaultValue='' readOnly={true} />
              <MdEdit className='edit-icon' onClick={()=>{document.getElementById('api-leverage-input').readOnly=false; document.getElementById('api-leverage-input').focus(); document.getElementById('api-settings-btn').disabled=false}} /><br />
              </div>
              <div className="api-setings-innerdivs">
              <label htmlFor="" className="api-settings-label">Time Frame (in Minutes) </label>
              <input type="number" placeholder='Time Frame' className='api-input' id='time-frame' name='timeFrame' defaultValue='1' readOnly={true} />
              <MdEdit className='edit-icon' onClick={()=>{document.getElementById('time-frame').readOnly=false; document.getElementById('time-frame').focus(); document.getElementById('api-settings-btn').disabled=false}} /><br />
              </div>
              <div className="api-setings-innerdivs">
              <label htmlFor="" className="api-settings-label">Margin Mode </label>
              <input type="radio" placeholder='' className='api-input api-radio' id='cross-margin-mode' name='margin' disabled />
              <label htmlFor="cross-margin-mode" className='radio-label' >Cross Margin</label>
              <input type="radio" placeholder='' className='api-input api-radio' id='isolated-margin-mode' name='margin' disabled />
              <label htmlFor="isolated-margin-mode" className='radio-label' >Isolated Margin</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <MdEdit className='edit-icon' onClick={()=>{document.getElementById('cross-margin-mode').disabled=false; document.getElementById('isolated-margin-mode').disabled=false; document.getElementById('cross-margin-mode').focus(); document.getElementById('api-settings-btn').disabled=false}} /><br />
              </div>
              <div className="api-setings-innerdivs">
              <label htmlFor="" className="api-settings-label">RSI Length </label>
              <input type="number" placeholder='RSI Length' className='api-input' id='rsiLength' name='rsiLength' defaultValue='' readOnly={true} />
              <MdEdit className='edit-icon' onClick={()=>{document.getElementById('rsiLength').readOnly=false; document.getElementById('rsiLength').focus(); document.getElementById('api-settings-btn').disabled=false}} /><br />
              </div>
              <div className="api-setings-innerdivs">
              <label htmlFor="" className="api-settings-label">RSI Upper </label>
              <input type="number" placeholder="Check that The Coin isn't Overbought" className='api-input' id='rsiUpper' name='rsiUpper' defaultValue='' readOnly={true} />
              <MdEdit className='edit-icon' onClick={()=>{document.getElementById('rsiUpper').readOnly=false; document.getElementById('rsiUpper').focus(); document.getElementById('api-settings-btn').disabled=false}} /><br />
              </div>
              <div className="api-setings-innerdivs">
              <label htmlFor="" className="api-settings-label">RSI Lower </label>
              <input type="number" placeholder="Check that The Coin isn't Underbought" className='api-input' id='rsiLower' name='rsiLower' defaultValue='' readOnly={true} />
              <MdEdit className='edit-icon' onClick={()=>{document.getElementById('rsiLower').readOnly=false; document.getElementById('rsiLower').focus(); document.getElementById('api-settings-btn').disabled=false}} /><br />
              </div>
              <div className="api-setings-innerdivs">
              <label htmlFor="" className="api-settings-label">Base Order Size </label>
              <input type="number" placeholder='Size of Initial Trade Made by the Bot' className='api-input' id='baseOrderSize' name='baseOrderSize' defaultValue='' readOnly={true} />
              <MdEdit className='edit-icon' onClick={()=>{document.getElementById('baseOrderSize').readOnly=false; document.getElementById('baseOrderSize').focus(); document.getElementById('api-settings-btn').disabled=false}} /><br />
              </div>
              <div className="api-setings-innerdivs">
              <label htmlFor="" className="api-settings-label">Max Trade Count </label>
              <input type="number" placeholder='Maximum Trade Count' className='api-input' id='maxTradeCount' name='maxTradeCount' defaultValue='' readOnly={true} />
              <MdEdit className='edit-icon' onClick={()=>{document.getElementById('maxTradeCount').readOnly=false; document.getElementById('maxTradeCount').focus(); document.getElementById('api-settings-btn').disabled=false}} /><br />
              </div>
              <div className="api-setings-innerdivs">
              <label htmlFor="" className="api-settings-label">Safety Order Volume Scale </label>
              <input type="number" placeholder='Safety Order Volume Scale' className='api-input' id='safetyOrderVolumeScale' name='safetyOrderVolumeSize' defaultValue='' readOnly={true} />
              <MdEdit className='edit-icon' onClick={()=>{document.getElementById('safetyOrderVolumeScale').readOnly=false; document.getElementById('safetyOrderVolumeScale').focus(); document.getElementById('api-settings-btn').disabled=false}} /><br />
              </div>
              <div className="api-setings-innerdivs">
              <label htmlFor="" className="api-settings-label">Safety Order Step </label>
              <input type="number" placeholder='Safety Order Step' className='api-input' id='safetyOrderStep' name='safetyOrderStep' defaultValue='' readOnly={true} />
              <MdEdit className='edit-icon' onClick={()=>{document.getElementById('safetyOrderStep').readOnly=false; document.getElementById('safetyOrderStep').focus(); document.getElementById('api-settings-btn').disabled=false}} /><br />
              </div>
              <div className="api-setings-innerdivs">
              <label htmlFor="" className="api-settings-label">Take Profit </label>
              <input type="number" placeholder='Take Profit' className='api-input' id='takeProfit' name='takeProfit' readOnly={true} />
              <MdEdit className='edit-icon' onClick={()=>{document.getElementById('takeProfit').readOnly=false; document.getElementById('takeProfit').focus(); document.getElementById('api-settings-btn').disabled=false}} /><br />
            </div>
            <button className='choose-bot-btn' id='api-settings-btn' onClick={setAPISettings}>Update Settings</button>
            <br /><br />
            </div>
          </div>
      </div>
  )
}

export default Settings