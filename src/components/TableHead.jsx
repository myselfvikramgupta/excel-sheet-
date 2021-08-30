import React from 'react'
function TableHead({thead=[]}) {
  
    return (
        <>
        <thead>
          <tr className="thead">
            {
                thead.map(head=><th key={head}>{head}</th>)
            }
            </tr>
        </thead>
        </>
    )
}

export default TableHead
