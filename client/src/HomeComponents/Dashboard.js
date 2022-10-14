import React from 'react'
import './Dashboard.css'
import { useState } from 'react'
import face from '../images/face.jpg'
import { FaStar, FaCopy, FaUserCircle } from 'react-icons/fa'
import { GoLinkExternal} from 'react-icons/go'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { SiEthereum } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { TbCopy } from 'react-icons/tb'
import graph from '../images/graph.png'

function Dashboard() {


    const [name, setname] = useState('')
  const [nameLoaded, setnameLoaded] = useState(false)

  async function loadName(){
    const response=await fetch(`http://192.168.211.189:8080/getName?key=${document.cookie.slice(4)}`)
    const data=await response.json()
    setname(data)
    setnameLoaded(true)
  }
  loadName()

    function onCopyClick() {
        // Get the text field
        var refId = document.getElementById("referralId").innerHTML
        
        // navigator.clipboard.writeText('http://192.168.211.189:3001/'+refId.toString());
        navigator.clipboard.writeText(refId);
        }

    function onUserIconClick(){
        const profileBox=document.getElementById('profileOverview')
        // alert(profileBox.style.visibility)
        if (profileBox.style.visibility=='visible'){
            profileBox.style.visibility='hidden'
        }else{
            profileBox.style.visibility='visible'
        }
    }

  return (
    <div className='dashboard'>
        <div className="upperContent">
        <div className="faltu-box">
            <h5 className="dashboard-heading">DASHBOARD</h5>
        </div>
        <div className="boxes">
                <div className="box">
                    <h5 className="earning-heading">Total Earnings</h5>
                    <span className="final-amt"><>$ </>10<sup>.04</sup></span><br />
                </div>
                <div className="box">
                    <h5 className="investment-heading">Total Invested Amount</h5>
                    <span className="final-amt"><>$ </>125<sup>.00</sup></span><br />
                </div>
                <div className="box rightmost-box">
                        <h6 className="rightmost-div-heading investment-heading">Since</h6>
                        <span className="since-date final-amt">Jan 24, 2021</span>
                </div>
            </div>
            <div className="topNavbar" onClick={onUserIconClick}>
            <span className="profileIconName">{nameLoaded ? name:''}</span>
            <FaUserCircle className='userIcon' />
            </div>
            {/* <div className="middleContent">
                <div className="graphArea"><img src={graph} className='trialImg' alt="" /></div>
                {/* <div className="middleContentRightView">
                    <div className="exchangeRates">
                        <table className="table-dark">
                            <tr className="table-dark">
                                <th className="table-dark xchange-td">S No.</th>
                                <th className="table-dark xchange-td">Currency</th>
                                <th className="table-dark xchange-td">Price</th>
                            </tr>
                            <tr className="table-dark">
                                <td className="table-dark xchange-td">1</td>
                                <td className="table-dark xchange-td  coin-name"><BsCurrencyBitcoin /> Bitcoin</td>
                                <td className="table-dark xchange-td">₹ 1700000</td>
                            </tr>
                            <tr className="table-dark">
                                <td className="table-dark xchange-td">2</td>
                                <td className="table-dark xchange-td">Ethereum</td>
                                <td className="table-dark xchange-td">₹ 1400000</td>
                            </tr>
                            <tr className="table-dark">
                                <td className="table-dark xchange-td">3</td>
                                <td className="table-dark xchange-td">Tether USD</td>
                                <td className="table-dark xchange-td">₹ 82</td>
                            </tr>
                            <tr className="table-dark">
                                <td className="table-dark xchange-td">4</td>
                                <td className="table-dark xchange-td">XRP</td>
                                <td className="table-dark xchange-td">₹ 26</td>
                            </tr>
                            <tr className="table-dark">
                                <td className="table-dark xchange-td">5</td>
                                <td className="table-dark xchange-td">DogeCoin</td>
                                <td className="table-dark xchange-td">₹ 4</td>
                            </tr>
                            <tr className="table-dark">
                                <td className="table-dark xchange-td">6</td>
                                <td className="table-dark xchange-td">Shiba Inu</td>
                                <td className="table-dark xchange-td">₹ 2</td>
                            </tr>
                        </table>
                    </div>
                    <div className="alertSelection">
                        <h3 className="alertHead">Alerts</h3>
                    </div>
                </div>
            </div> */}
            <div className="profileOverview" id='profileOverview'>
                {/* <div className="profileHeading">
                    <img src={face} alt="" className="faceImg" />
                    <h3 className="profileName" id="profileName">Alex Pina</h3><br />
                </div> */}
                <div className="faltuDiv">
                    <span className="licenseTier">License Tier :&nbsp;&nbsp; <FaStar className='licenseLogo' /> &nbsp;Premium</span><br /><br /><br />
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
            <div className="dashboard-transactions">
                <div className="txn-topbar">
                    <span className="txn-txt">Transactions</span>
                    <span className="view-more-link"><Link to={'/transactions'} className='view-more-link'><GoLinkExternal className='gotologo' /> View More</Link></span>
                </div>
                <table className="table-dark" >
                    <tr className="table-dark" id='th'>
                        <th className="table-dark trxn-td">Txn Type</th>
                        <th className="table-dark trxn-td">Coin</th>
                        <th className="table-dark trxn-td">Quantity.</th>
                        <th className="table-dark trxn-td">Amount</th>
                        <th className="table-dark trxn-td">Time</th>
                        <th className="table-dark trxn-td">Profit/Loss</th>
                    </tr>
                    <tr className="table-dark">
                        <td className="table-dark trxn-td">BUY</td>
                        <td className="table-dark trxn-td  coin-name"><BsCurrencyBitcoin /> Bitcoin</td>
                        <td className="table-dark trxn-td">2</td>
                        <td className="table-dark trxn-td">₹40,00,000</td>
                        <td className="table-dark trxn-td">16:30</td>
                        <td className="table-dark" style={{color:'green'}}>+2.43%</td>
                    </tr>
                    <tr className="table-dark">
                        <td className="table-dark trxn-td">SELL</td>
                        <td className="table-dark trxn-td"><SiEthereum /> Ethereum</td>
                        <td className="table-dark trxn-td">1.4</td>
                        <td className="table-dark trxn-td">₹23,00,000</td>
                        <td className="table-dark trxn-td">16:36</td>
                        <td className="table-dark trxn-td" style={{color:'rgb(0, 212, 0)'}}>+2.43%</td>
                    </tr>
                    <tr className="table-dark">
                        <td className="table-dark trxn-td">SELL</td>
                        <td className="table-dark trxn-td">Tether USD</td>
                        <td className="table-dark trxn-td">40</td>
                        <td className="table-dark trxn-td">₹3,200</td>
                        <td className="table-dark trxn-td">17:43</td>
                        <td className="table-dark trxn-td" style={{color:'red'}}>-0.43%</td>
                    </tr>
                    <tr className="table-dark">
                        <td className="table-dark trxn-td">BUY</td>
                        <td className="table-dark trxn-td">Tether USD</td>
                        <td className="table-dark trxn-td">100</td>
                        <td className="table-dark trxn-td">₹80,000</td>
                        <td className="table-dark trxn-td">17:06</td>
                        <td className="table-dark" style={{color:'green'}}>+2.43%</td>
                    </tr>
                    <tr className="table-dark">
                        <td className="table-dark trxn-td">SELL</td>
                        <td className="table-dark trxn-td">XRP</td>
                        <td className="table-dark trxn-td">1000</td>
                        <td className="table-dark trxn-td">₹35,000</td>
                        <td className="table-dark trxn-td">18:32</td>
                        <td className="table-dark trxn-td" style={{color:'rgb(0, 212, 0)'}}>+7.43%</td>
                    </tr>
                    <tr className="table-dark">
                        <td className="table-dark trxn-td">BUY</td>
                        <td className="table-dark trxn-td">Tether USD</td>
                        <td className="table-dark trxn-td">120</td>
                        <td className="table-dark trxn-td">₹9,600</td>
                        <td className="table-dark trxn-td">17:06</td>
                        <td className="table-dark" style={{color:'green'}}>+2.43%</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Dashboard

// Admin panel
// Stop btn