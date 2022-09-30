import React from 'react'
import { useState } from 'react'
import './License.css'
import { GrLicense } from 'react-icons/gr'
import { FaStar } from 'react-icons/fa'

function License() {

    return (
        <div className='license'>
            <div className="licenseHeader">
                <h2 className="licenseHeading">
                    <GrLicense className='licenseHeadingLogo' /> License Tier
                </h2>
                <span className="current-license">
                    Current License Tier :&nbsp;&nbsp;<FaStar className='licenseMiniLogo' /> <b>Large</b>
                </span>
            </div>
            <div className="license-cards">
                <div className="license-card">
                    <h4 className="licenseCardTitle">Starter</h4>
                </div>
                <div className="license-card">
                    <h4 className="licenseCardTitle">Basic</h4>
                </div>
                <div className="license-card">
                    <h4 className="licenseCardTitle">Standard</h4>
                </div>
                <div className="license-card">
                    <h4 className="licenseCardTitle">Premium</h4>
                </div>
                <div className="license-card">
                    <h4 className="licenseCardTitle">Ultimate</h4>
                </div>
            </div>

        </div>
    )
}

export default License