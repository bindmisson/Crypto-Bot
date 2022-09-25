import React from 'react'
import './Dashboard.css'
import face from '../images/face.jpg'
import {FaStar, FaCopy} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {TbCopy} from 'react-icons/tb'

function Dashboard() {


    function onCopyClick() {
        // Get the text field
        var refId = document.getElementById("referralId").innerHTML
        
        // navigator.clipboard.writeText('http://192.168.43.57:3000/'+refId.toString());
        navigator.clipboard.writeText(refId);
        }

  return (
    <div className='dashboard'>
        <div className="upperContent">
            <div className="middleContent">
                abcdlore
            </div>
            <div className="profileOverview">
                <div className="profileHeading">
                    <img src={face} alt="" className="faceImg" />
                    <h3 className="profileName" id="profileName">Alex Pina</h3><br />
                </div>
                    <span className="licenseTier">License Tier :&nbsp;&nbsp; <FaStar className='licenseLogo' /> &nbsp;Large</span><br /><br /><br />
                    {/* <span className="licenseTier referral">My Referral Code :&nbsp;&nbsp;<span id="referralId">vishal-5g3h</span><TbCopy className='referralCopyBtn' onClick={onCopyClick} /> </span><br /><br /><br /> */}
                    <div className="investedTxt">Invested : <span className="investedAmt">$ 6540</span></div><br />
                    <div className="passiveIncomeTxt">Passive Income : <span className="passiveIncomeAmt">$ 1443.45</span></div><br />
                    <div className="referralIncomeTxt">Referral Income : <span className="referralIncomeAmt">$320</span></div><br />
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum est atque aperiam illo quas nostrum porro quo expedita repellat minu */}
                        <Link to='refer' className='referLink' >
                    <div className="referralBox">
                            <span className="referText">Refer & Earn</span>
                    </div><br />
                        </Link>
            </div>
        </div>
            <div className="transactions">
                <table className="table-dark" >
                    <tr className="table-dark" id='th'>
                        <th className="table-dark">Txn Type</th>
                        <th className="table-dark" >Coin</th>
                        <th className="table-dark">Nos.</th>
                        <th className="table-dark">Amount</th>
                        <th className="table-dark">Time</th>
                        <th className="table-dark">Profit/Loss</th>
                    </tr>
                    <tr className="table-dark">
                        <td className="table-dark">BUY</td>
                        <td className="table-dark">BitCoin</td>
                        <td className="table-dark">2</td>
                        <td className="table-dark">₹40,00,000</td>
                        <td className="table-dark">16:30</td>
                        {/* <td className="table-dark" style={{color:'green'}}>+2.43%</td> */}
                    </tr>
                    <tr className="table-dark">
                        <td className="table-dark">SELL</td>
                        <td className="table-dark">Ethereum</td>
                        <td className="table-dark">1.4</td>
                        <td className="table-dark">₹23,00,000</td>
                        <td className="table-dark">16:36</td>
                        <td className="table-dark" style={{color:'rgb(0, 212, 0)'}}>+2.43%</td>
                    </tr>
                    <tr className="table-dark">
                        <td className="table-dark">SELL</td>
                        <td className="table-dark">Tether USD</td>
                        <td className="table-dark">40</td>
                        <td className="table-dark">₹3,200</td>
                        <td className="table-dark">17:43</td>
                        <td className="table-dark" style={{color:'red'}}>-0.43%</td>
                    </tr>
                    <tr className="table-dark">
                        <td className="table-dark">BUY</td>
                        <td className="table-dark">Tether USD</td>
                        <td className="table-dark">100</td>
                        <td className="table-dark">₹80,000</td>
                        <td className="table-dark">17:06</td>
                        {/* <td className="table-dark" style={{color:'green'}}>+2.43%</td> */}
                    </tr>
                    <tr className="table-dark">
                        <td className="table-dark">SELL</td>
                        <td className="table-dark">XRP</td>
                        <td className="table-dark">1000</td>
                        <td className="table-dark">₹35,000</td>
                        <td className="table-dark">18:32</td>
                        <td className="table-dark" style={{color:'rgb(0, 212, 0)'}}>+7.43%</td>
                    </tr>
                    <tr className="table-dark">
                        <td className="table-dark">BUY</td>
                        <td className="table-dark">Tether USD</td>
                        <td className="table-dark">120</td>
                        <td className="table-dark">₹9,600</td>
                        <td className="table-dark">17:06</td>
                        {/* <td className="table-dark" style={{color:'green'}}>+2.43%</td> */}
                    </tr>
                </table>
            </div>
    </div>
  )
}

export default Dashboard