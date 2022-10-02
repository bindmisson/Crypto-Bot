import React from 'react'
import './Transactions.css'
import {SiEthereum} from 'react-icons/si'
import {BsCurrencyBitcoin} from 'react-icons/bs'
import { FaDollarSign } from 'react-icons/fa'

function Transactions() {

  const navbar=document.getElementById('navbar')
    const navHeading=document.getElementById('navHeading')
    navbar.style.width='140px'
      navHeading.style.visibility='hidden'
      document.getElementById('menuTxt1').style.display='none'
      document.getElementById('menuTxt2').style.display='none'
      document.getElementById('menuTxt3').style.display='none'
      document.getElementById('menuTxt4').style.display='none'
      document.getElementById('menuTxt5').style.display='none'

  return (
    <div className='transactions-div'>
      <div className="licenseHeader trxn-header">
                <h2 className="licenseHeading trxn-heading">
                  Transactions
                </h2>
                <span className="current-license">
                    Net Profit/Loss :&nbsp; <b className='net'>+ $4304.50</b>
                </span>
            </div>
            <div className="trxn-div">
      <table className="table-dark table2">
        <tr className="table-dark">
          <th className="table-dark">S No.</th>
          <th className="table-dark">Coin</th>
          <th className="table-dark">Quantity</th>
          <th className="table-dark">Amount</th>
          <th className="table-dark txn-type">Txn Type</th>
          <th className="table-dark percent-change">Profit/Loss</th>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">1</td>
          <td className="table-dark  coin-name"><BsCurrencyBitcoin /> Bitcoin <span className="coin-price">₹1700000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹400 <span className="change-percent">+5.56%</span></td>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">2</td>
          <td className="table-dark"><SiEthereum /> Ethereum <span className="coin-price">₹1400000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹250 <span className="change-percent">+5.56%</span></td>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">3</td>
          <td className="table-dark  coin-name"><BsCurrencyBitcoin /> Bitcoin <span className="coin-price">₹1700000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹400 <span className="change-percent">+5.56%</span></td>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">3</td>
          <td className="table-dark  coin-name"><BsCurrencyBitcoin /> Bitcoin <span className="coin-price">₹1700000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹400 <span className="change-percent">+5.56%</span></td>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">3</td>
          <td className="table-dark  coin-name"><BsCurrencyBitcoin /> Bitcoin <span className="coin-price">₹1700000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹400 <span className="change-percent">+5.56%</span></td>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">3</td>
          <td className="table-dark  coin-name"><BsCurrencyBitcoin /> Bitcoin <span className="coin-price">₹1700000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹400 <span className="change-percent">+5.56%</span></td>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">3</td>
          <td className="table-dark  coin-name"><BsCurrencyBitcoin /> Bitcoin <span className="coin-price">₹1700000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹400 <span className="change-percent">+5.56%</span></td>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">3</td>
          <td className="table-dark  coin-name"><BsCurrencyBitcoin /> Bitcoin <span className="coin-price">₹1700000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹400 <span className="change-percent">+5.56%</span></td>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">3</td>
          <td className="table-dark  coin-name"><BsCurrencyBitcoin /> Bitcoin <span className="coin-price">₹1700000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹400 <span className="change-percent">+5.56%</span></td>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">3</td>
          <td className="table-dark  coin-name"><BsCurrencyBitcoin /> Bitcoin <span className="coin-price">₹1700000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹400 <span className="change-percent">+5.56%</span></td>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">3</td>
          <td className="table-dark  coin-name"><BsCurrencyBitcoin /> Bitcoin <span className="coin-price">₹1700000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹400 <span className="change-percent">+5.56%</span></td>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">3</td>
          <td className="table-dark  coin-name"><BsCurrencyBitcoin /> Bitcoin <span className="coin-price">₹1700000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹400 <span className="change-percent">+5.56%</span></td>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">3</td>
          <td className="table-dark  coin-name"><BsCurrencyBitcoin /> Bitcoin <span className="coin-price">₹1700000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹400 <span className="change-percent">+5.56%</span></td>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">3</td>
          <td className="table-dark  coin-name"><BsCurrencyBitcoin /> Bitcoin <span className="coin-price">₹1700000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹400 <span className="change-percent">+5.56%</span></td>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">3</td>
          <td className="table-dark  coin-name"><BsCurrencyBitcoin /> Bitcoin <span className="coin-price">₹1700000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹400 <span className="change-percent">+5.56%</span></td>
        </tr>
        <tr className="table-dark">
          <td className="table-dark">3</td>
          <td className="table-dark  coin-name"><BsCurrencyBitcoin /> Bitcoin <span className="coin-price">₹1700000</span></td>
          <td className="table-dark">0.004</td>
          <td className="table-dark">7200</td>
          <td className="table-dark txn-type">Sell</td>
          <td className="table-dark percent-change">₹400 <span className="change-percent">+5.56%</span></td>
        </tr>
      </table>
      </div>
    </div>
  )
}

export default Transactions