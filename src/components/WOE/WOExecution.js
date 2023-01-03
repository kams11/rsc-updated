import React from 'react';
import WOE from "../WOE/WOExecution.module.css";
import {BsUpcScan} from "react-icons/bs";

const WOExecution = () => {
  return (
    <>
        <div className={WOE.container}>
        <div className={WOE.huContainer}>
            <label className={WOE.huLabel} htmlFor="hu"><BsUpcScan size={20} style={{marginBottom:"5px"}}/> HU NUMBER</label>
            <input type="text" name='hu'/>
        </div>



        
        </div>
    </>
  )
}

export default WOExecution;