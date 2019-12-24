import React, { useState } from 'react';
import { connect } from 'react-redux';
import { newUser } from '../redux/action/userAction';
import { newCompany } from '../redux/action/companyAction';
import './PostForm.css';

const PostForm = ({
  id,
  username,
  gender,
  email,
  company,
  years,
  owner,
  location,
  newUserAction,
  nweCompanyAction
}) => {
  const [userState, setUserState] = useState({
    id: null,
    username: null,
    gender: null,
    email: null
  });

  const [companyState, setCompanyState] = useState({
    name: null,
    years: 0,
    owner: null,
    location: null
  });

  const handleUser = () => {
    newUserAction(userState);
  };

  const handleInputUser = (id, { target: { value } }) => {
    setUserState({ ...userState, [id]: value });
  };

  const handleCompany = () => {
    nweCompanyAction(companyState);
  };

  const handleInputCompany = (id, { target: { value } }) => {
    setCompanyState({ ...companyState, [id]: value });
  };

  return (
    <div id='post-form' className='container'>
      <div>
        <h1>User Id: {id}</h1>
        <h3>Username: {username}</h3>
        <h3>Gender: {gender}</h3>
        <h3>Email: {email}</h3>
        <div className='post-form-form'>
          <input onChange={e => handleInputUser('id', e)} type='text' placeholder='Id' />
          <input onChange={e => handleInputUser('username', e)} type='text' placeholder='Username' />
          <input onChange={e => handleInputUser('gender', e)} type='text' placeholder='Gender' />
          <input onChange={e => handleInputUser('email', e)} type='text' placeholder='E-mail' />
          <button className='post-form-btn' onClick={handleUser}>
            Add User
          </button>
        </div>
      </div>
      <br />
      <div>
        <h1>Company Name: {company}</h1>
        <h3>Years: {years}</h3>
        <h3>Owner: {owner}</h3>
        <h3>Location: {location}</h3>
        <div className='post-form-form'>
          <input onChange={e => handleInputCompany('name', e)} type='text' placeholder='Company Name' />
          <input onChange={e => handleInputCompany('years', e)} type='text' placeholder='Years' />
          <input onChange={e => handleInputCompany('owner', e)} type='text' placeholder='Owner' />
          <input onChange={e => handleInputCompany('location', e)} type='text' placeholder='Location' />
          <button className='post-form-btn' onClick={handleCompany}>
            Add Company
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, company }) => {
  return {
    id: users.id,
    username: users.username,
    gender: users.gender,
    email: users.email,
    company: company.name,
    years: company.years,
    owner: company.owner,
    location: company.location
  };
};

const mapActionToProps = {
  newUserAction: newUser,
  nweCompanyAction: newCompany
};

export default connect(mapStateToProps, mapActionToProps)(PostForm);
