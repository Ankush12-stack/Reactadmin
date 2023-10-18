import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './style.css';
import { AiFillCodeSandboxCircle,AiFillDollarCircle } from 'react-icons/ai';
import { FaAngleRight } from 'react-icons/fa';

function Sidebar() {
    const [active, setActive] = useState(1);
  return (
    <div className=' sidebar d-flex justify-content-between flex-column bg-primary shadow-1-strong text-white py-3 ps-3 pe-5 vh-100' style={{color:'darkblue'}}>
        <div>
            <a href='' className='p-3 text-decoration-none text-white'>
            <AiFillCodeSandboxCircle className='fs-5 me-3'/>
                <span className='fs-3'>Dashboard</span>
            </a>
            <hr className='text-white mt-2'/>
            <ul className='nav nav-pills flex-column mt-3'>
                <li className={active ===1 ? 'active nav-item p-2 ': "nav-item p-2"}
                 onClick={e => setActive(1)}>
                    <span className='p-1'>
                        <i className='bi bi-speedometer2 me-3 fs-5'></i>
                        <span className='fs-4'>Dashboard</span>
                    </span>
                </li>
                <li className={active ===2 ? 'active nav-item p-2 ': "nav-item p-2"}
                 onClick={e => setActive(2)}>
                    <span className='p-1'>
                        <i className='bi bi-table me-3 fs-5'></i>
                        <span className='fs-4'>Product</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaAngleRight className='fs-5'/>
                    </span>
                </li>
                <li className={active ===3 ? 'active nav-item p-2 ': "nav-item p-2"}
                 onClick={e => setActive(3)}>
                    <span className='p-1'>
                        <i className='bi bi-people me-3 fs-5'></i>
                        <span className='fs-4'>Customers</span>&nbsp;<FaAngleRight className='fs-5'/>
                    </span>
                </li>
                <li className={active === 4 ? 'active nav-item p-2 ': "nav-item p-2"}
                 onClick={e => setActive(4)}>
                    <span className='p-1'>
                        <i className='bi bi-grid me-3 fs-5'></i>
                        <span className='fs-4'>Income</span>&nbsp;&nbsp;<FaAngleRight className='fs-5'/>
                    </span>
                </li>
                <li className={active === 5 ? 'active nav-item p-2 ': "nav-item p-2"}
                 onClick={e => setActive(5)}>
                    <span className='p-1'>
                        <i className='bi bi-percent me-3 fs-5'></i>
                        <span className='fs-4'>Promote</span>&nbsp;<FaAngleRight className='fs-5'/>
                    </span>
                </li>
                <li className={active === 5 ? 'active nav-item p-2 ': "nav-item p-2"}
                 onClick={e => setActive(5)}>
                    <span className='p-1'>
                        <i className='bi bi-question-circle me-3 fs-5'></i>
                        <span className='fs-4'>Help</span>&nbsp;<FaAngleRight className='fs-5'/>
                    </span>
                </li>
            </ul>
        </div>
        <div>
            <hr className='text-white'/>
            <div className='nav-item p-2'>
                <a href='' className='p-1b text-decoration-none text-white'>
                    <i className='bi bi-person-circle me-3 fs-4'></i>
                    <span className='fs-4'><strong>Evano</strong></span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar