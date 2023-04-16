import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Layout(props) {
    return (
      <div>
        <Navbar />
        <div className="content">
          {props.children}
        </div>
      </div>
    );
  }
  