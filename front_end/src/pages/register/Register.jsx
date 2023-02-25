import React, { Component } from 'react';
import "./register.css";
import axios from "axios";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const checkPass=RegExp(/^^[A-Za-z]\w{8,31}$/);

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
export default class Register extends Component {


    constructor(props) {
        super(props);
          this.state = {
            name: null,
            email: null,
            password: null,
            phone: null,
            repassword: null,
            test:"",
            accept:false,
            users:[],
            errors: {
              name: '',
              email: '',
              phone: '',
              password: '',
              repassword: '',
            }
          };
          this.users =this.props.users
          console.log(this.users);
        }
        componentDidMount = () =>{
          axios.get("http://localhost:80/405_found/back_end/user.php/users/")
          .then((respone)=>{
            let email = respone.data.map((ele) => {
                  return ele.email
            })
            console.log(email);
              this.setState({
                  users:email
              })
              // setUsers(respone.data)
              console.log(respone.data);
          })
      }
        handleChange = (event) => {
          console.log(event);
          // event.preventDefault();
          const { name, value } = event.target;
          console.log( event.target.name, event.target.value );
            // let name = event.target.name;
            // let value = event.target.value;
          let errors = this.state.errors;
          switch (name) {
            case 'name': 
              errors.name = 
                value.length < 5
                  ? 'Full Name must be 5 characters long!'
                  : '';
              break;
              case 'email': 
              errors.email = 
              !validEmailRegex.test(value)
              ? 'Email is not valid!'
              : this.state.users.includes(value) 
              ? 'Email is already has been taken'
              : '' ; 
              break;
              case 'phone': 
                errors.phone = 
                  value.length !== 10
                    ? 'Phone must be 10 characters !'
                    : '';
                break;
            case 'password': 
            this.setState({
              test:value
            })
            errors.password = 
            checkPass.test(value)
            
            // value.length < 8 
  
            ? ''
            : 'Password must be 8 characters long!';
            break;
            case 'repassword': 
            console.log(this.state.test);
              errors.repassword = 
                value !== this.state.test
                  ? 'Confirm Password not match!'
                  : '';
              break;
            default:
              break;
          }
        
          this.setState({errors, [name]: value}, ()=> {
              console.log(errors)
          })
        }



        handleSubmit = (event) => {
          event.preventDefault();
          this.setState({accept:true,})

          const { name, email,password,phone } = this.state;
  
          let errors = this.state.errors;
          if(name === null){
              errors.name =  'Name is required'
          }
          if(email=== null){
              errors.email =  'email is required'
          }
          if(phone=== null){
              errors.phone =  'phone is required'
          }
          if(password === null){
              errors.password =  'password is required'
          }
   
          this.setState({errors}, ()=> {
              console.log(errors)
          })
  
          if(validateForm(this.state.errors)) {
            console.info('Valid Form')
            // let newUser ={name:this.state.name,email:this.state.email,password:this.state.password}
            // this.users.push(newUser);
            let inputs = {name:this.state.name,email:this.state.email,phone:this.state.phone,password:this.state.password}
            axios.post("http://localhost:80/405_found/back_end/user.php/save",inputs)
            .then((respone)=>{
                console.log(respone.data);
                // window.location.pathname = "a";
            })
    
  
            // localStorage.setItem('users',JSON.stringify(this.users))
          }else{
            console.error('Invalid Form')
          }
          console.log( this.users);
  
        }
      




  render() {
    const {errors} = this.state;

    return (
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">405 FOUND</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on 405 FOUND.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
      <form method="POST" onSubmit={this.handleSubmit} noValidate >

          <InputGroup className="mb-3">
              <FloatingLabel  label="Full name">
              <Form.Control aria-label="name" placeholder="Full name" type='text' name='name' onChange={this.handleChange} noValidate />
              {errors.name.length > 0 && this.state.accept && <span className='error'>{errors.name}</span>}
              </FloatingLabel>  
          </InputGroup>
          <InputGroup className="mb-3">
              <FloatingLabel  label="Email">
              <Form.Control aria-label="email" placeholder="email"  type='email' name='email' onChange={this.handleChange} noValidate/>
              {errors.email.length > 0 && this.state.accept && <span className='error'>{errors.email}</span>}
              </FloatingLabel>  
          </InputGroup>
          <InputGroup className="mb-3">
              <FloatingLabel  label="Phone">
              <Form.Control aria-label="Phone" placeholder="phone"  type='text' name='phone' onChange={this.handleChange} noValidate />
              {errors.phone.length > 0 && this.state.accept && <span className='error'>{errors.phone}</span>}
              </FloatingLabel>  
          </InputGroup>
          <InputGroup className="mb-3">
              <FloatingLabel  label="Password">
              <Form.Control aria-label="password" type='password' placeholder="password" name="password" onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && this.state.accept && <span className='error'>{errors.password}</span>}
              </FloatingLabel>  
          </InputGroup>
          <InputGroup className="mb-3">
              <FloatingLabel  label="Confirm Password">
              <Form.Control aria-label="confirmpassword" type='password' placeholder="Confirm password" name='repassword' onChange={this.handleChange} noValidate />
              {errors.repassword.length > 0 && this.state.accept && <span className='error'>{errors.repassword}</span>}
              </FloatingLabel>  
          </InputGroup>
              <button className="loginButton" >Sign Up</button>
      </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}