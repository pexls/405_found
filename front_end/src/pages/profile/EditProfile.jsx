import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";
import "./editprofile.css";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'




const EditProfile = () => {

    const navigate = useNavigate();

    const[editProfile, setEditProfile]= useState({}) 

    const {id}= useParams();

    useEffect(()=>{
        getProfileEdit();
    }, []);



    const getProfileEdit = () => {

        axios.get(`http://localhost/405_found/back_end/profile.php/${id}`)
        .then(function(response){
            console.log(response.data);
            setEditProfile(response.data);
        })

    }

    //timeout
    const Timer = () => {  
    setTimeout(()=>{ 
        alert("Change succesfully");//alert user
        // navigate('/Profile');
                    }, 3000)
    }

    const handleChange= (event)=>{
        const name = event.target.name; // to get the name of the input
        const value = event.target.value;

        setEditProfile(values =>({...values, [name]: value})); // to set the values (the name of input then : the value of that input) to values

    }

    const handleSubmit =(event)=>{
        event.preventDefault(); // to prevent the page from refresh on submit

        axios.put(`http://localhost/405_found/back_end/profile.php/${id}/edit`, editProfile)
        .then(function(response){
         console.log(response.data); 
         Timer();
        }) // to go to this api link (My Backend) , with my inputs data .then update user based on id when we use put message in console.log then go to homePage


        //console.log(editProfile)
    }




  return (
    <>
    <Topbar />
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
            <div className="profileRightTop">

                    <div className="profileCover">

                        <img className="profileCoverImg" src="./assets/post/3.jpg" alt="" />
                        <img className="profileUserImg" src="./assets/person/7.jpg" alt="" />
                    
                    </div>

                    <div className="profileInfo">
                        <h4 className="profileInfoName">mohammed al maslamani</h4>
                        <span className="profileInfoDesc">full stack web divlobar</span>
                    </div>

                    <div className="profileForm ">
                    {/* <h1>Update Info</h1> */}

                    <Form className="Container" onSubmit={handleSubmit}>

                        <Form.Group className="mb-3 inpotForm">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control value={editProfile.fullName} name="fullName" type="text" placeholder="Enter Full Name" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={editProfile.email} name="email" type="text" placeholder="Enter email"  onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={editProfile.password} name="password" type="password" placeholder="Password" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Phone</Form.Label>
                            <Form.Control value={editProfile.phone} name="phone" type="text" placeholder="Phone" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>User photo</Form.Label>
                            <Form.Control value={editProfile.image} name="image" type="file" placeholder="Cover photo" onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-4" >
                            <Form.Label>Cover photo</Form.Label>
                            <Form.Control value={editProfile.coverimage} name="coverimage" type="file" placeholder="User photo" onChange={handleChange}/>
                        </Form.Group>


                        <button class="EditJs styleedit" id="editbtn" type="submit">
                            <Link to={`/Profile`}>Save Changes</Link>
                         </button>


                   </Form>



                    </div>
            


            </div>
       

        </div>

    </div>
  </>
  )
}

export default EditProfile