import React from 'react'
import Barchart from './Barchart.png';
import PieChart from './Piechart.png';
import Product from './products.png';
import PieCharts from './PieCharts';
import {AiFillDollarCircle} from 'react-icons/ai';
import {TiClipboard} from 'react-icons/ti';
import {BiDevices} from 'react-icons/bi';
import {RiRotateLockFill} from 'react-icons/ri';

function Home() {
  return (
    <div className='p-3 bg-light'>
        <div className='container-fluid'>
            <div className="row">
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light'>
                    <div className='d-flex justify-content-between p-4 align-items-center bg-white border rounded border-white shadow-sm'>
                    <AiFillDollarCircle className='fs-1 text-success'/>
                    <div>
                        <span>Earning</span>
                        <h2 className='fs-5'>$198k</h2>
                        <h1 className='fs-5 text-primary'><i className='bi bi-arrow-up fs-5 text-primary'></i>37.8% this month</h1>
                    </div>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light'>
                    <div className='d-flex justify-content-between p-4 align-items-center bg-white border rounded border-white shadow-sm'>
                    <TiClipboard className='fs-1 text-primary' />
                    <div>
                        <span>Orders</span>
                        <h2 className='fs-5'>$2.4k</h2>
                        <h1 className='fs-5 text-danger'><i className='bi bi-arrow-down fs-5 text-danger'></i>2% this month</h1>
                    </div>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light'>
                    <div className='d-flex justify-content-between p-4 align-items-center bg-white border rounded border-white shadow-sm'>
                    <BiDevices className='fs-1 text-danger'/>
                    <div>
                        <span>Balance</span>
                        <h2 className='fs-5'>$2.4k</h2>
                        <h1 className='fs-5 text-danger'><i className='bi bi-arrow-down fs-5 text-danger'></i>2% this month</h1>
                    </div>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light'>
                    <div className='d-flex justify-content-between p-4 align-items-center bg-white border rounded border-white shadow-sm'>
                    <RiRotateLockFill className='fs-1' style={{color: 'red'}}/>
                    <div>
                        <span>Total Sales</span>
                        <h2 className='fs-5'>$89k</h2>
                        <h1 className='fs-5 text-success'><i className='bi bi-arrow-up text-success'></i>11% this month</h1>
                    </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-8 p-3'>
                    <img src={Barchart} alt='Barchart image' width={840} height={310}/>   
                    {/* <img src={PieChart} alt='PieChart image' />*/}
                </div>
                <div className='col-12 col-md-4 p-3'>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img src={PieChart} width={300} height={310}/>
                </div>
                <img src={Product} height={100} width={150}  />
            </div>
            <div className='col-12 col-md-2 p-3'>
                    
                </div>
        </div>
    </div>
  )
}

export default Home