import React from "react";

import { BsFillHouseDoorFill } from 'react-icons/bs';





export default function House({ location}) {
    return (
      <div className="info">
          <BsFillHouseDoorFill/> {location}
      </div>
    );
  }
  