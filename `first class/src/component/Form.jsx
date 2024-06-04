
import React, {useState} from 'react'

const Form = () => {
const [myform, setForm] = useState({ name:'', class: '' });
const [student, setStudent] = useState([{ name:'adeolu', class: 1}]);
const [isEditing, setisEditing] = useState(false);
const [currentEditingIndex, setcurrentEditingIndex] = useState(null);

const handleChange =(e)=>{
 e.preventDefault();
 setForm({...myform,[e.target.name]: e.target.value});
};
const submit= (e) => {
 e.preventDefault();
 if(isEditing){
  edit();
 }else{
  if(myform.class && myform.name){
   setStudent([...student, myform]);
   setForm({name:'', class:''});

  }
 }
};
const edit =()=>{
 setStudent([...student.map((std, i)=> i=== currentEditingIndex ? myform: std)])
 setisEditing(false);
 setcurrentEditingIndex(null);
 setForm({name:'', class:''});
}

const startEdit=(ind)=>{
setisEditing(true);
setcurrentEditingIndex(ind)
const theval =student[ind];
setForm ({name:'', class:''});
}

const deleteStudent =(ind) =>{
 const confirmDelete = window.confirm("are you sure want to delete")
 if (confirmDelete){
  setStudent([...student.filter((std, i)=> i !==ind)]);
 }
};

  return (
    <div>
     <form onSubmit={submit}>
      <input type="text" name="name" value={myform.name} placeholder='input your name' onChange={handleChange} style={{}}/>
        <br />
      <input type="number" name="name" value={myform.class} placeholder='input your class' onChange={handleChange}/>

      <button type='submit' disabled={!myform.name || !myform.class}>Send</button>
     </form>
     <div>
      {student.map((each, i) => (
      <div key={i} style={{borderBottom:"1px solid green" }}>
       <div>Name: {each.name}</div>
       <div>Class: {each.class}</div>
       <button onClick={()=> startEdit(i)} style={{background:"blue"}}>Edit</button><br />
       <button onClick={()=> deleteStudent(i)} style={{background:"red", color:"white"}}>Delete</button>
      </div>
      ))}
     </div>
    </div>
  );
};

export default Form