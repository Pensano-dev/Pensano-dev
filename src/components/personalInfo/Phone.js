import React from "react";
import './Info.css'

import { AiFillPhone } from 'react-icons/ai';





export default function Phone({ phone }) {
    return (
      <div className="info">
          <AiFillPhone /> {phone} 
      </div>
    );
}
