import React from 'react'
import './Dashboard.css'
import face from '../images/face.jpg'
import {FaStar} from 'react-icons/fa'

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className="upperContent">
            <div className="middleContent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde eaque illo nostrum expedita autem earum explicabo dicta placeat fugit adipisci ea, consequuntur, et numquam perferendis eos corporis odit vitae suscipit reprehenderit qui maxime amet id inventore. Non, voluptatum ex.
            </div>
            <div className="profileOverview">
                <div className="profileHeading">
                    <img src={face} alt="" className="faceImg" />
                    <h3 className="profileName" id="profileName">Alex Pina</h3>
                    <span className="licenseTier">License Tier :&nbsp;&nbsp; <FaStar className='licenseLogo' /> &nbsp;Large</span><br /><br /><br />
                    <div className="investedTxt">Invested : <span className="investedAmt">$ 6540</span></div><br />
                    <div className="passiveIncomeTxt">Passive Income : <span className="passiveIncomeAmt">$ 1443.45</span></div><br />
                    <div className="referralIncomeTxt">Referral Income : <span className="referralIncomeAmt">$320</span></div><br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum est atque aperiam illo quas nostrum porro quo expedita repellat minu
                </div>
            </div>
        </div>
        <div className="transactions">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos, inventore praesentium labore dolorum beatae quibusdam fuga quae doloremque commodi omnis eius iste rerum enim, veniam laboriosam unde rem, ab culpa nihil? At exercitationem nam quas numquam nisi facilis accusantium asperiores, velit iste excepturi, quo magnam! Alias nisi, nulla deleniti aliquam earum voluptate! Sapiente ea laboriosam nesciunt quibusdam, accusamus consequatur odio optio commodi aliquam, alias maxime maiores labore esse iusto numquam sint, illum nemo quaerat tempore veritatis accusantium sunt fugiat molestiae aperiam? Cumque, hic? Eveniet magni eum voluptas deleniti optio ipsa rem quas facere recusandae, tempora eos consequuntur vel tenetur.
        </div>
    </div>
  )
}

export default Dashboard