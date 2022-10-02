import React from 'react'
import { useState } from 'react'
import './License.css'
import { GrLicense } from 'react-icons/gr'
import { FaStar } from 'react-icons/fa'

function License() {

    // document.getElementById('navbar').style.width='140px'
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
        <div className='license'>
            <div className="licenseHeader">
                <h2 className="licenseHeading">
                    <GrLicense className='licenseHeadingLogo' /> License Tier
                </h2>
                <span className="current-license">
                    Current License Tier :&nbsp;&nbsp;<FaStar className='licenseMiniLogo' /> <b>Premium</b>
                </span>
            </div>
            <div className="license-cards">
                <div className="license-card">
                    <h4 className="licenseCardTitle">Starter</h4>
                    <div className="price-div">
                        <span className="original-amt"><strike>$20</strike></span>
                        <span className="save-percent">SAVE 50%</span><br /><br />
                        <span className="final-amt"><sup>$</sup>10<sub>/mo</sub></span><br />
                        <span className="curr">INR</span>
                    </div>
                    <button className="select-btn">SELECT</button><br />
                    <span className="min-balance">Min Balance : $100</span>
                </div>
                <div className="license-card">
                    <h4 className="licenseCardTitle">Basic</h4>
                    <div className="price-div">
                        <strike className="original-amt">$40</strike>
                        <span className="save-percent">SAVE 50%</span><br /><br />
                        <span className="final-amt"><sup>$</sup>20<sub>/mo</sub></span><br />
                        <span className="curr">INR</span>
                    </div>
                    <button className="select-btn">SELECT</button><br />
                    <span className="min-balance">Min Balance : $500</span>
                </div>
                <div className="license-card">
                    <h4 className="licenseCardTitle">Standard</h4>
                    <div className="price-div">
                        <strike className="original-amt">$60</strike>
                        <span className="save-percent">SAVE 60%</span><br /><br />
                        <span className="final-amt"><sup>$</sup>25<sub>/mo</sub></span><br />
                        <span className="curr">INR</span>
                    </div>
                    <button className="select-btn">SELECT</button><br />
                    <span className="min-balance">Min Balance : $2000</span>
                </div>
                <div className="license-card">
                    <h4 className="licenseCardTitle">Premium</h4>
                    <div className="price-div">
                        <strike className="original-amt">$80</strike>
                        <span className="save-percent">SAVE 56%</span><br /><br />
                        <span className="final-amt"><sup>$</sup>35<sub>/mo</sub></span><br />
                        <span className="curr">INR</span>
                    </div>
                    <button className="select-btn">SELECT</button><br />
                    <span className="min-balance">Min Balance : $5000</span>
                </div>
                <div className="license-card">
                    <h4 className="licenseCardTitle">Ultimate</h4>
                    <div className="price-div">
                        <strike className="original-amt">$100</strike>
                        <span className="save-percent">SAVE 50%</span><br /><br />
                        <span className="final-amt"><sup>$</sup>50<sub>/mo</sub></span><br />
                        <span className="curr">INR</span>
                    </div>
                    <button className="select-btn">SELECT</button><br />
                    <span className="min-balance">Min Balance : $20000</span>
                </div>
            </div>

        </div>
    )
}

export default License