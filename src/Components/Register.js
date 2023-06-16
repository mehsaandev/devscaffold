import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Register() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
<h1 className="text-center mb-3" >Register</h1>
      <MDBInput wrapperClass='mb-4' label='First Name' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Last Name' id='form2' type='password'/>
      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>

      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


      <MDBBtn className="mb-4">Sign Up</MDBBtn>

      

    </MDBContainer>
  );
}

export default Register;
