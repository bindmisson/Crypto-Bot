import React from 'react'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import {ImCross} from 'react-icons/im'
import { useState } from 'react'

function Users() {

    const [users, setusers] = useState('')
    const [usersLoaded, setusersLoaded] = useState(false)

    async function getUsers(){
        const response=await fetch('http://20.193.147.19:8080/admin-get-users')
        const data= await response.json()
        console.log(data)
        setusers(JSON.stringify(data))
        setusersLoaded(true)
    }
    getUsers()
    let a=0

    async function remAccount(user){
        const resp=window.confirm('Are You Sure, You Want to Remove '+user+' Permenantly?')
        if (resp){
            await fetch(`http://20.193.147.19:8080/removeAccount?user=${user}`)
            window.location.reload()
        }
    }

  return (
    <div className='users'>
        <Table>
            <TableHead>
                <TableRow className='table-heading' style={{fontWeight:'600'}}>
                    <TableCell style={{fontWeight:'600'}}>S No.</TableCell>
                    <TableCell style={{fontWeight:'600'}}>Name</TableCell>
                    <TableCell style={{fontWeight:'600'}}>Username</TableCell>
                    <TableCell style={{fontWeight:'600'}}>Total Investment</TableCell>
                    <TableCell style={{fontWeight:'600'}}>Total Earned</TableCell>
                    <TableCell style={{fontWeight:'600'}}>Earning %age</TableCell>
                    <TableCell style={{fontWeight:'600'}}>Referrals Made</TableCell>
                    <TableCell style={{fontWeight:'600'}}>License</TableCell>
                    <TableCell style={{fontWeight:'600'}}>Bot</TableCell>
                    <TableCell style={{fontWeight:'600'}}></TableCell>
                    {/* <TableCell><ImCross />&nbsp;Remove Account Permenantly</TableCell> */}
                </TableRow>
            </TableHead>
            <TableBody>
                {usersLoaded ? JSON.parse(users).map((i)=>{
                    a++
                    return <TableRow><TableCell>{a}</TableCell><TableCell>{i.name}</TableCell><TableCell>{i.username}</TableCell><TableCell>{i.totalInvestment}</TableCell><TableCell>{i.totalEarned}</TableCell><TableCell>{i.earnedPercentage}</TableCell><TableCell>{i.totalReferrals}</TableCell><TableCell>{i.license}</TableCell><TableCell>{i.bot}</TableCell><TableCell style={{color:'red', cursor:'pointer'}} onClick={()=>{remAccount(i.username)}}><ImCross />&nbsp;&nbsp;<span style={{fontSize:'16px', fontWeight:'600'}}>Revoke</span></TableCell></TableRow>
                }):''}
            </TableBody>
        </Table>
    </div>
  )
}

export default Users