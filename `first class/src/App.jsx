
import MyButton from './component/MyButton'
import AddTodo from './component/AddTodo'
import New from './New'
import Effect from './component/Effect'
import Form from './component/Form'
import Fetch from './component/Fetch'
import Home  from './component/Home'
import NotFound from './component/NotFound'
import Navigat from './component/Navigat'
import { Routes, Route, Navigate } from 'react-router-dom'



const App = () => {

  return (
    <div> 
      <Navigat/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/navigate' element={<Navigat/>}></Route>
        <Route path='*' element={<Navigate to='/NotFound'/>}></Route>
        <Route path='/NotFound' element={<NotFound/>}></Route>
        <Route path='/Fetch' element={<Fetch/>} ></Route>
       </Routes>
      {/* <MyButton/> */}
      {/* <AddTodo/> */}
      {/*                                          <New/> */}
      {/* <Effect/> */}
      {/* <Fetch/> */}
      {/* <Form/> */}
      
    </div>
  )
}

export default App