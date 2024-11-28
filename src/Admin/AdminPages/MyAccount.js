import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminComp/AdminHeader'
import AdminFooter from '../AdminComp/AdminFooter'
import MyAccountcomp from '../AdminComp/MyAccountcomp'
import { useNavigate } from 'react-router-dom'
import Firebase from '../../Firebase'

const MyAccount = () => {
const navigate= useNavigate()
const [userdetails,setuserdetails]=useState({})
useEffect(()=>{const user= JSON.parse(localStorage.getItem("Users"))
  if(!user) return alert("Unauthorized user")
    window.history.replaceState(null, null, "/Login")
  return navigate("/",{replace:true})
Firebase.child("Users").child(user).on("value",function(snap){
if(snap.val()) return setuserdetails(snap.val())
  else return setuserdetails({})
})   
}
    ,[])

  return (
    <div>
      <AdminHeader myaccount="active"/>
      <MyAccountcomp user={userdetails}/>
      <AdminFooter/>
    </div>
  )
}

export default MyAccount
