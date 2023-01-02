import React from 'react';
import "../CTO/CTorderTable.css";

export const CtorderTable = () =>{
  return(
    <>
    <div className='ctoTableContainer'>
        <div className="ctoTableTitle" >
            <div className='ctoTT'><h5>Total number of items(1)</h5></div>
            <div className='ctoTTbtn'>
                <button className='ctoTTbtnRead' >RE-READ MASTER DATA</button>
                <button className='ctoTTbtnCreate' >CREATE WO</button>
            </div>
        </div>
        <br />
        <div className="ctoTableBody">
        <form >
            <table>
                <thead className='ctoThead'>
                    <tr>
                        <th><input type="checkbox"></input></th>
                        <th scope="col"></th>
                        <th scope="col">Product Code</th>
                        <th scope="col">Product Description</th>
                        <th scope="col">Variant/Mode Code</th>
                        <th scope="col">GTIN</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">UOM</th>
                        <th scope="col">Batch</th>
                        <th scope="col">DOM</th>
                        <th scope="col">GTIN</th>
                        <th scope="col">SLED</th>
                        <th scope="col">Comments</th>
                        <th scope="col">Master Data Error...</th>
                        <th scope="col">Work Order#</th>
                        
                    </tr>
                </thead>
                <tbody className='ctoTbody' style={{columnHeight:"20px"}}>
                  <tr>
                    <td><input type="checkbox"></input></td>
                    <td></td>
                    <td>242436-12</td>
                    <td>COUPLER AC ZOOM </td>
                    <td>12</td>
                    <td>1737373729349</td>
                    <td>1</td>
                    <td>EA</td>
                    <td>BATCHHH</td>
                    <td></td>
                    <td></td>
                    <td>MDM Check Success</td>
                    <td>N/A</td>
                    <td></td>
                    <td></td>
                    
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                    
                  </tr>
                </tbody>
            </table>
            
    
  </form>

        </div>

    </div>
    
    </>

  );
    
    }

export default CtorderTable;