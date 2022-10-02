import React from 'react'
import './Settings.css'
import {FaRobot} from 'react-icons/fa'

function Settings() {
  return (
      <div className="settings">
        <div className="licenseHeader trxn-header">
              <h2 className="licenseHeading trxn-heading">
                Settings
              </h2>
              <span className="current-license">
              <FaRobot className='robot-icon' />&nbsp;&nbsp;Bot Selected :&nbsp; <b className='bot-name'> Magic Bot</b>
              </span>
          </div>
          <div className="settings-inner-div">
            <div className="bot-settings">
              <h2 className="bot-settings-heading">Bot Settings</h2><br />
              <div className="bots-list">
                <div className="bot-item">
                  <h6 className="bot-item-heading">Magic Bot</h6>
                </div>
                <div className="bot-item">
                  <h6 className="bot-item-heading">DCA Bot</h6>
                </div>
                <div className="bot-item">
                  <h6 className="bot-item-heading">SMA Bot</h6>
                </div>
                <div className="bot-item">
                  <h6 className="bot-item-heading">RSI Bot</h6>
                </div>
              </div>
            </div>
            <div className="api-settings">
              <h6 className="bot-settings-heading api-settings-heading">API Settings</h6>
            </div>
          </div>
      </div>
  )
}

export default Settings