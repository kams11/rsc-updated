import {useState,React} from 'react';
import WOE from "../WOE/WOExecution.module.css";
import {BsUpcScan} from "react-icons/bs";
import WOEform from './WOEform';


const WOExecution = () => {
    const [toggleWOEF,setToggleWOEF] = useState(false);
  const toggleWOEFHandler3 =()=>{
    setToggleWOEF(!toggleWOEF);
  }


  return (
    <>
        <div className={WOE.woecontainer}>
        
        <div className={WOE.titleCont}>
            <h2 className={WOE.title}>Work Order Execution</h2>
        </div>
        <div className={WOE.huContainer}>
            <label className={WOE.huLabel} htmlFor="hu"><BsUpcScan size={20} style={{marginBottom:"5px"}}/> HU NUMBER</label>
            <input type="text" name='hu' onChange={toggleWOEFHandler3} />
        </div>

        {toggleWOEF?<WOEform/>:null}


        </div>
    </>
  )
}

export default WOExecution;