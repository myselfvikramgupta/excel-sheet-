import { useState } from 'react';

function TableBody({thead =[]}) {
  //const [cellEdit,setCellEdit]=useState(false);
 // const [cellValue,setCellValue]=useState("");
  const tableCell=(cellid)=>{
      document.querySelector('.cell > div').classList.remove("active");    
      document.getElementById(cellid).classList.add("active");
      document.getElementById(cellid).contentEditable=true;
     // setCellEdit(true)
  }
 //const inputChange=(e)=>setCellValue(e.target.value)
 //const inuptBlur=(id)=> setCellEdit(false)
 let row=thead.length;
 let col=thead.length;
 const Row=()=>{
     let rowList=[];
  for(let i=1;i< row;i++){
            rowList[i]=( 
            <tr key={i}>
                <td className="cell">
                    <div >{i}</div>
                </td>
               {Col(col,i)}
           </tr>
            )
          }

        return rowList;
    
 }
 const Col=(x,id)=>{
        let colList=[];
        for(let i=1;i< x;i++){
            colList[i]=(
            <td key={i} className="cell">
                <div onClick={()=>tableCell(`${thead[i]}${id}`)}   id={`${thead[i]}${id}`} > 
                </div> 
            </td>
            )
          }

        return colList;
 }

    return (
        <>
            <tbody>
             <Row/> 
            </tbody>
        </>
    )
}

export default TableBody
