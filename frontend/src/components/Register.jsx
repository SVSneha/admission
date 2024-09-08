import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigation = useNavigate();
    const [state, setState] = useState({});
    const [type,setType] = useState('cancel');
    let defaultState = {
        UGCollegeName: '',
        UGYearOfPassing: '',
        address: '',
        dob: '',
        gender: '',
        name: '',
        phone: '',
        sem1: '',
        sem2: '',
        sem3: '',
        sem4: '',
        sem5: '',
        sem6: '',
        tenthMarkInPercentage: '',
        tenthSchoolName: '',
        tenthYearOfPassing: '',
        twelthMarkInPercentage: '',
        twelthSchoolName: '',
        twelthYearOfPassing: ''
    }
    const handleChange = (e) => {
        setState(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const submit = () => {
        if (type === 'update') {
            axios.put('http://localhost:8000/updateItem', state)
                .then(res => {
                    alert("Student details Updated Successfully")
                })
        } else {
            axios.post('http://localhost:8000/createItem', state)
                .then((res) => {
                    alert("Admission Registered Successfully");
                    setState(defaultState)
                })
        }
    }
    const find = () => {
          axios.get(`http://localhost:8000/getItemBydob?dob=${state?.dob}`)
           .then(res => {
                if (type === 'update') {
                    if (res.data.length > 0) {
                        setState(prev => ({...prev,...res.data?.[0]}))
                    } 
                }
            })
    }
    console.log(state,type)
    return (
        <div style={{ height: "100vh" }}>
                   {type==='update' && 
                   <center>
                <><label>Date of Birth</label>
                 <input name='dob' type='date' value={state?.dob} onChange={e => handleChange(e)} required />
                <button onClick={e=>find()}>find</button>
                
                </>
                </center>}
            <form onSubmit={e => { e.preventDefault(); submit() }} method='post'>
                <h1>Student Registration</h1><br></br>
                <h4>Personal Details</h4>
                <label>Name</label>
                <input name='name' value={state?.name} onChange={e => handleChange(e)} required />
                <label>Phone number</label>
                <input name='phone' type='number' value={state?.phone} onChange={e => handleChange(e)} required />
                <label>Date of birth</label>
                <input name='dob' type='date' value={state?.dob} onChange={e => handleChange(e)} required />
                <label>Gender</label>
                <input name='gender' value={state?.gender} onChange={e => handleChange(e)} required />
                <label>Address</label>
                <input name='address' type='textArea' value={state?.address} onChange={e => handleChange(e)} required /><br></br>
                <h4>Education Details</h4>
                <p>SSLC Details</p>
                <label>School Name</label>
                <input name='tenthSchoolName' value={state?.tenthSchoolName} onChange={e => handleChange(e)} required />
                <label>Year of passing</label>
                <input name='tenthYearOfPassing' type='year' value={state?.tenthYearOfPassing} onChange={e => handleChange(e)} required />
                <label>Mark in percentage</label>
                <input name='tenthMarkInPercentage' type='number' value={state?.tenthMarkInPercentage} onChange={e => handleChange(e)} required />
                <p>HSC Details</p>
                <label>School Name</label>
                <input name='twelthSchoolName' value={state?.twelthSchoolName} onChange={e => handleChange(e)} required />
                <label>Year of passing</label>
                <input name='twelthYearOfPassing' type='year' value={state?.twelthYearOfPassing} onChange={e => handleChange(e)} required />
                <label>Mark in percentage</label>
                <input name='twelthMarkInPercentage' type='number' value={state?.twelthMarkInPercentage} onChange={e => handleChange(e)} required />
                <p>UG Details</p>
                <label>College Name</label>
                <input name='UGCollegeName' value={state?.UGCollegeName} onChange={e => handleChange(e)} required />
                <label>Year of passing</label>
                <input name='UGYearOfPassing' type='year' value={state?.UGYearOfPassing} onChange={e => handleChange(e)} required />
                <label>Sem 1 Mark in percentage</label>
                <input name='sem1' type='number' value={state?.sem1} onChange={e => handleChange(e)} required />
                <label>Sem 2 Mark in percentage</label>
                <input name='sem2' type='number' value={state?.sem2} onChange={e => handleChange(e)} required /><br></br><br></br>
                <label>Sem 3 Mark in percentage</label>
                <input name='sem3' type='number' value={state?.sem3} onChange={e => handleChange(e)} required />
                <label>Sem 4 Mark in percentage</label>
                <input name='sem4' type='number' value={state?.sem4} onChange={e => handleChange(e)} required />
                <label>Sem 5 Mark in percentage</label>
                <input name='sem5' type='number' value={state?.sem5} onChange={e => handleChange(e)} required />
                <label>Sem 6 Mark in percentage</label>
                <input name='sem6' type='number' value={state?.sem6} onChange={e => handleChange(e)} /><br></br><br></br>
                <center>
                <input type="submit" value="Submit"></input>&nbsp;&nbsp;&nbsp;
                <button onClick={()=>{setType((prev)=>prev==='cancel'?'update':"cancel");setState(defaultState)}}>{type==='cancel'?'Edit':"cancel"}</button>&nbsp;&nbsp;&nbsp;
                <input type="submit" value="Home" onClick={() => navigation('/home')}></input>
                </center>
            </form>        </div>    )	}
export default Register
