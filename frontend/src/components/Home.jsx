import React from 'react'
import {useNavigate} from 'react-router-dom'
const Home = () => {
    const navigation = useNavigate();
  return (
    <div>
        <h1>MCA Admission Portal</h1>
        <div className='buttons'>
          <center>
        <button onClick={()=>navigation('/studentRegistration')} >Login as Student</button>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>navigation('/display')}>Login as Staff</button>
        </center>
        </div>    </div>  )	}
export default Home
