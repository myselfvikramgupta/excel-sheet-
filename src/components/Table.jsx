import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'
const Table = () => {
      const thead=" ABCDEFGHIJ".split("");
    return (
        <>
         <table className="table">
           <TableHead thead ={thead} />
         <TableBody thead ={thead} />
          </table>
        </>
    )
}

export default Table
