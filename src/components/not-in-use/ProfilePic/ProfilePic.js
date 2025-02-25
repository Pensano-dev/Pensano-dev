import React from 'react';
import './ProfilePic.css'

export default function ProfilePic({ imageProp }) {
  return (
    <div>
      <img className='pic' src={imageProp} alt="Profile Picture" />
    </div>
  );
}