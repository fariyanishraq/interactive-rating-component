import { Route, Routes, Navigate } from "react-router-dom"
import Thanks from "./pages/Thanks/Thanks"
import Rating from "./pages/Rating/Rating"



export default function App(){
  return(
    <Routes>
      <Route path='/' element={<Rating/>}/>
      <Route path='/thanks' element={<Thanks/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  )
}