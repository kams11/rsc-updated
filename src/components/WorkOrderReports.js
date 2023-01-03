import React from 'react';
import  WOR from './WOReports.module.css';
import {IoMdSearch} from 'react-icons/io';
import { useState } from 'react';
import WORtable from './WORtable';

const WorkOrderReports = () => {
  const [toggleT2,setToggleT2] = useState(false);
  const toggleHandlerT2 =()=>{
    setToggleT2(!toggleT2);
  }

  return (
    <>
        <div className={WOR.worContainer}>
        <div className={WOR.TObody} >
        <form method="GET" className={WOR.woForm}>
        <div className={WOR.worFormBody}>
            <div className={WOR.worFormRow1}>
              <div className={WOR.fr}> <label htmlFor="">Transformation Site</label></div>
              <div className={WOR.fr}> <label htmlFor="">Transform Order Number</label></div>
              <div className={WOR.fr}> <label htmlFor="">Ship to Country</label></div>
              <div className={WOR.fr}> <label htmlFor="">Work Order Status</label></div>
              <div className={WOR.fr}> <label htmlFor="">Work Order Number</label></div>
              <div className={WOR.fr}> <label htmlFor="">Date Created</label></div>
              <div className={WOR.fr}> <label htmlFor="">Work Station</label></div>
              <div className={WOR.fr}> <label htmlFor="">Product Number</label></div>
            </div>
            <div className={WOR.worFormRow2}>
                  <div className={WOR.fr}><select id="sites" name="sites">
                                <option value="111">Courcelles,Belgium</option>
                                <option value="222">Saab</option>
                                <option value="333">Fiat</option>
                                <option value="444">Audi</option>
                        </select>
                  </div>
                  <div className={WOR.fr}><input type="text" /></div>
                  <div className={WOR.fr}><input type="text" /></div>
                  <div className={WOR.fr}><select id="status" name="status">
                                <option value="111"> <input type="checkbox" /> CANCEL</option>
                                <option value="222"><input type="checkbox" />COMPLETED</option>
                                <option value="333"><input type="checkbox" />CREATED</option>
                                <option value="444"><input type="checkbox" />IN-PROCESS</option>
                                <option value="444"><input type="checkbox" />ON-HOLD</option>
                        </select></div>
                  <div className={WOR.fr}><input type="text" /></div>
                  <div className={WOR.fr}><input type="text" /></div>
                  <div className={WOR.fr}><input type="date" onFocus="(this.type='date')" /></div>
                  <div className={WOR.fr}><input type="text" /></div>
                        
            </div>
        </div>    
                 
  </form>
  
  
        </div>
        <div style={{marginTop:"20px",display:"block",justifyContent:"space-between"}}>
                <button className={WOR.searchbtn} onClick={toggleHandlerT2} ><IoMdSearch style={{marginBottom:"3px"}}/>SEARCH</button>
                <button className={WOR.clearbtn} onClick={toggleHandlerT2}>CLEAR</button>
                
        </div>
        <div style={{display:"block",justifyContent:"center",paddingBottom:"20px",padding:"6px"}}>
        {toggleT2?<WORtable />:null} 
        </div>
        </div> 
    </>
  )
}



export default WorkOrderReports;