import { useState, useEffect } from "react";
import React from "react";
import "./style.css";

export default function App() {

  useEffect(() => {
    var checkOutEvent = new Event("check-out-event",{
      fields: {
        
      }
    })
  });


  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
