// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Details from './Details'
// const Fetch = () => {
//  let url = "https://api.github.com/users"
//  const [user, setUser] = useState([])

//   useEffect (()=>{

//  },[])
//  const fetch = () =>{
//   axios.get(url)
//   .then((res)=>{
//     console.log(res.data);
//     setUser(res.data)
//   })
//  }
//   return (
//     <div>
//      <h1>Fetch</h1>
//      <button onClick={fetch}>Get data</button>
//      {user.map((user)=>(
//       <Details user={user} key={user.id} />
      
//      ))

//      }
//     </div>
//   )
// }

// export default Fetch
import React, { useState } from 'react';
import axios from 'axios';

const Fetch = () => {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);

  const fetch = () =>{
      axios.get(url)
      .then((res)=>{
        console.log(res.data);
        setUsers(res.data)
      })
     }

  return (
    <div>
      <h1>Fetch</h1>
      <button onClick={fetch}>Get data</button>
      {users.map(user => (
        <div id='all-inside' key ={user.id}>
        <div id='name'>{user.login}</div>
        <img id='images' src={user.avatar_url} alt=""/>
        <div id='url'>{user.events_url}</div>
       </div>
      ))}
    </div>
  );
};

export default Fetch;