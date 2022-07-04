import React,{useState} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import All from './context/All'
import { DataProvider } from './context/Allcontext'
import Rough from './context/Rough'
import Form from './Form'

const App = () => {
  
  return (
    <div>
      <DataProvider> 
      <Router>
        
        <Routes>
      
          <Route path='/' element={<Rough/>}/>
          
          <Route path='/data/:id' element={<All/>}/>
        </Routes>
      </Router>
      </DataProvider>
    
      {/* <Form/> */}
    </div>
  )
}

export default App





























  // <Router>
  //       <Navbar />
  //       <Routes>
  //         <Route path='/home' element={<Home/>}/>
  //         <Route path='/about' element={<About/>}/>
  //         <Route path='/items' element={<Items/>}/>
  //         <Route path='/contact' element={<Contact/>}/>
  //         <Route path='*'  element={<Nppage/>}/>
  //       </Routes>
  //     </Router> 
  //     <Effect/> 
  //      <button onClick={()=>setData(!data)}>Click</button>  











