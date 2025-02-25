import React from "react";
import './Info.css'
import { AiFillLinkedin } from 'react-icons/ai';






export default function Linkedin({ linkedin}) {
    return (
      <div className="info">
          <a className="link" target="_blank" rel="noopener noreferrer" href={linkedin}><AiFillLinkedin /></a>
        </div>
    );
  }
  