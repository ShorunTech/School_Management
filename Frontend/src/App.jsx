import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';

import { Staffs, About, Students, Dashboard, Navbar,  } from './components';
import './App.css'



const App = () => {
    return (
        <div className='app'>

        <div className='navbar'>
           <Navbar />
        </div>
        <div className='main'>
          <Layout>
              <div className="routes">
              <Routes>
                <Route path="/Dashboard" element={<Dashboard/>} />
             </Routes>
             <Routes>
                <Route path="/Students" element={<Students/>} />
             </Routes>
             <Routes>
                <Route path="/Staffs" element={<Staffs/>} />

             </Routes>
             <Routes>
                <Route path="/About" element={<About/>} />
             </Routes>
          
              </div>
          </Layout>

        
          <div className='footer'>
           <Typography.Title  level={5} style={{color: 'white',textAlign: 'center'}}>
              School Management System<br />
              All right reserverd
           </Typography.Title>
           <Space>
             <Link to="/"> Home</Link>
             <Link to="/students"> Students</Link>
             <Link to="/staffs"> Staffs</Link>
             
           </Space>
                     
          </div>
        </div>
        </div>
    );
}

export default App