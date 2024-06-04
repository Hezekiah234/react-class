import React, {useState} from 'react'

const New = () => {
 const [firstName, setfirstName] = useState()
 const [lastName, setlastName] = useState()
 const [email, setemail] = useState()
 const [password, setpassword] = useState()
 const firstButton = ()=>{
  let details = {firstName, lastName, email, password}
    // setfirstName(firstName)
    console.log(details.firstName);
 }
  return (
    <div>
     <input type="text" placeholder='firstName' onChange={(e)=>setfirstName(e.target.value)} />
     <input type="text" />
     <input type="text" />
     <button onClick={firstButton}>submit</button>
    </div>
  )
}

export default New