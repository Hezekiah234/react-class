
import React, {useEffect, useState} from 'react'


const Effect = () => {
  const [num, setNum] = useState(1)
  const [firstName, setFirstName] = useState("Adeolu")

  useEffect(()=>{
   console.log('i am working');
  },[num])
  return (
    <div>
     <h1>i am adeolu</h1>
     <h1>{num} {firstName}</h1>
     <button onClick={()=>setNum(num+1)} >Increase Number</button>
     <button onClick={()=> setFirstName("Adebayo")} >Change Name</button>
    </div>
  )
}

export default Effect