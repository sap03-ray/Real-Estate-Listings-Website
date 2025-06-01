import React from 'react';
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';
import Body from './Body';
const Main = () => {
  return <>
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-md-2 m-0 p-0'>
                    <Sidebar/>
                </div>
                <div className='col-12 col-md-10 m-0 p-0'>
                  {/* <div className='top-header'>
                    <form>
                    <i class="fas fa-bars"></i>
                    <NavLink to="/" className="top-nav">Home</NavLink>
                    <NavLink to="/" className="top-nav">Contact</NavLink>
                    <NavLink to="/pages/login"><i className="fas fa-user float-right mr-3"></i></NavLink>
                    <i class="fas fa-bell float-right mr-3"></i>
                    <i class="fas fa-envelope float-right mr-3"></i>
                    </form>
                  </div> */}
                
                {/* {body area start} */}
                  <Body/>
                {/* {body area end} */}
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Main