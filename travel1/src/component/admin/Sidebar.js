import React from 'react';
import '../admin/css/Sidebar.css';
import Image from '../../data/image/logo_real.png';
import { NavLink } from 'react-router-dom';
function Sidebar() {
    const Show = () => {
        if (document.getElementById('submenu').style.display === 'block') {
            document.getElementById('submenu').style.display = 'none';
        }
        else {
            document.getElementById('submenu').style.display = 'block';
        }
    }
    const Show1 = () => {
        if (document.getElementById('submenu1').style.display === 'block') {
            document.getElementById('submenu1').style.display = 'none';
        }
        else {
            document.getElementById('submenu1').style.display = 'block';
        }
    }
    const Show2 = () => {
        if (document.getElementById('submenu2').style.display === 'block') {
            document.getElementById('submenu2').style.display = 'none';
        }
        else {
            document.getElementById('submenu2').style.display = 'block';
        }
    }
    const Show3 = () => {
        if (document.getElementById('submenu3').style.display === 'block') {
            document.getElementById('submenu3').style.display = 'none';
        }
        else {
            document.getElementById('submenu3').style.display = 'block';
        }
    }
    return <>
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 m-0 p-0'>
                        <div className='sidebar'>
                            <div className='sidebar-top'>
                                <img src={Image} alt='image' height="80px" width="150px"></img>
                            </div>
                            <div className='sidebar-bottom'>
                                <nav>
                                    <NavLink to="/" className="nav" id='nav1'><i class="fas fa-tachometer-alt"></i>Dashboard</NavLink>
                                    <NavLink to="/" className="nav" onClick={Show}><i class="fa-solid fa-torii-gate"></i>Tour<i id="drop1" class="fas fa-plus"></i></NavLink>
                                    <div id='submenu'>
                                        <NavLink to="/" className="nav"><i class="fas fa-plus"></i>Create Tour</NavLink>
                                        <NavLink to="/" className="nav"><i class="far fa-pen-to-square"></i>Edit Tour</NavLink>
                                    </div>
                                    <NavLink to="/" className="nav" onClick={Show1}><i class="fas fa-utensils"></i>Booking<i id="drop1" class="fas fa-plus"></i></NavLink>
                                    <div id='submenu1'>
                                        <NavLink to="/" className="nav"><i class="fa-sharp fa-solid fa-reply-all"></i>Get All Booking</NavLink>
                                    </div>
                                    <NavLink to="/" className="nav" onClick={Show2}><i class="fas fa-user"></i>User<i id="drop1" class="fas fa-plus"></i></NavLink>
                                    <div id='submenu2'>
                                        <NavLink to="/" className="nav"><i class="fas fa-user-secret"></i>Get Single User</NavLink>
                                        <NavLink to="/" className="nav"><i class="fas fa-users"></i>Get All Users</NavLink>
                                    </div>
                                    <NavLink to="/home" className="nav"><i class="fas fa-right-from-bracket"></i>Sign Out</NavLink>
                                    <div className='title'>
                                        <span>ADMINISTRATOR</span>
                                    </div>
                                    <NavLink to="/" className="nav"><i class="fas fa-user"></i>Add User</NavLink>
                                    <div className='title'>
                                        <span>Report</span>
                                    </div>
                                    <NavLink to="/" className="nav"><i class="fas fa-pluse-square"></i>Tour Report</NavLink>
                                    <NavLink to="/" className="nav"><i class="fas fa-pluse-square"></i>Review Report</NavLink>
                                    <NavLink to="/" className="nav"><i class="fas fa-pluse-square"></i>Booking Report</NavLink>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Sidebar