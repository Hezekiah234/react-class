import React, { useState } from "react"


const AddTodo = () => {
 const [alltodo, setalltodos]=useState("")
  return (
    <div>
     <p>Add todo</p>
     {/* <input className='addOne' type="text" placeholder="Add todo" onChange={{e}=>console.log(e.target.value)} />
     
     <button onClick={(=> addFunction(alltodo))}>AddTodo</button> */}
    </div>
  )
}

export default AddTodo