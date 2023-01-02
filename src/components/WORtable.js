import React from 'react';
import TOT2 from "./TOtable.module.css";

export const WORtable = () =>{
  return(
    <>
    
    <div className={TOT2.tab2Body2}>
        <div className={TOT2.URtitile}>
             <h5 style={{color:"white"}}>Total Records : 02</h5>
          </div>
        <div className={TOT2.TObody}>
            <form >
                <table >
                <thead className={TOT2.urtThead}>
                    <tr>
                        <th>Product Number</th>
                        <th scope="col">Variety Code</th>
                        <th scope="col">Batch Number</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Work Order Number</th>
                        <th scope="col">Transform Order Number</th>
                        <th scope="col">Work Order Status</th>
                        <th scope="col">Unit of Measurement</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Transformation Request</th>
                        <th scope="col">GTIN</th>
                        <th scope="col">Product Description</th>
                        <th scope="col">Label Printer</th>
                        <th scope="col">Network Printer</th>
                        <th scope="col">WO Execution Operator Name</th>
                        <th scope="col">WO Execution Start Date And Time</th>
                    </tr>
                </thead>
                <tbody className={TOT2.urtTbody}>
                  <tr>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                  </tr>
                  <tr>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                  </tr>
                </tbody>
            </table>
            
    
  </form>

        </div>

        </div>
    </>

  );
    
    }

export default WORtable;