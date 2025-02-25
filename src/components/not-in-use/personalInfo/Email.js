import React from "react";
import './Info.css'

import { MdEmail } from 'react-icons/md';

export default function Email({ email}) {
    return (
      <div className="info">
          <MdEmail /> {email}
			</div>
    );
  }
  