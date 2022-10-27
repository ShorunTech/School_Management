import React from 'react';
import { Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, ReadOutlined, LaptopOutlined, MoneyCollectOutlined } from '@ant-design/icons';


import icon from '../images/Logo9999.png';


const Navbar = () => {
    return (
        <div className="nav-container">

           <div className="logo-container"> 
             <Avatar src = {icon} size = "large"  / >
               
              <Typography.Title level = {2} className ="logo">
                    <Link to = "/"> ShorunTech </Link> 
               </Typography.Title>
           </div>

           <Menu theme='dark'>
              <Menu.Item icon={<HomeOutlined />}>
                 <Link to="/Dashboard">Dashboard</Link>
               </Menu.Item>
               <Menu.Item icon={<MoneyCollectOutlined />}>
                 <Link to="/staffs">Staffs</Link>
               </Menu.Item>
               <Menu.Item icon={<LaptopOutlined />}>
                 <Link to="/Students">Students</Link>
               </Menu.Item>
               <Menu.Item icon={<ReadOutlined />}>
                 <Link to="/About">About</Link>
               </Menu.Item>
           </Menu>
        </div>
    );

} 



export default Navbar