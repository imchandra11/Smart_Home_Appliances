import './App.css';
import { FaHome } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { FaKitchenSet } from "react-icons/fa6";
import { GiShower } from "react-icons/gi";
import { BiSolidCctv } from "react-icons/bi";
import * as React from 'react';
import Switch from '@mui/material/Switch';
import { HiOutlineLightBulb } from "react-icons/hi";


const label = { inputProps: { 'aria-label': 'Switch demo' } };

function App() {
  return (
    <div className="App">
    <div class="grid grid-cols-[5%_75%_20%]">
   <div class="w-full h-screen bg-[#FBF5E9] flex-col justify-between ">
    <div class="h-[15%] flex justify-center items-center"><FaHome class="h-[30px] w-[30px] text-red-900"/></div>
    <div class="h-[15%] flex justify-center items-center"><IoIosBed class="h-[30px] w-[30px] text-red-900"/></div>
    <div class="h-[15%] flex justify-center items-center"><FaKitchenSet class="h-[30px] w-[30px] text-red-900"/></div>
    <div class="h-[15%] flex justify-center items-center"><GiShower class="h-[30px] w-[30px] text-red-900"/></div>
    <div class="h-[15%] flex justify-center items-center"><BiSolidCctv class="h-[30px] w-[30px] text-red-900"/></div>
   </div>
   <div className='relative'>
     <img class="absolute h-screen object-cover" src="https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
     <div className='absolute inset-0 bg-gray-900 bg-opacity-75'></div>
     <div className='relative h-full flex justify-center items-center'>
      <h1 className='text-white text-4xl'>Welcome to our smart home Apllication website</h1>
     </div>
    </div>


   <div class="w-full h-screen bg-[#FBF5E9] grid grid-cols-[100%]">
    <div className='h-[100%]'>
    <div className=''>
        <div className='text-[#4B573C] text-[25px] font-bold pt-3 flex justify-center items-center'>Control Pannel 1</div>
        <div className='pl-8 pt-7'><HiOutlineLightBulb className='text-4xl text-red-900'/></div>
        <div className='flex justify-between items-center pt-5 pl-8 pr-8'>
          <div className='text-[20px] font-semibold text-[#4B573C] '>Main</div>
          <div><Switch {...label} defaultChecked /></div>
        </div>
        <div className='flex justify-between items-center pt-5 pl-8 pr-8'>
          <div className='text-[20px] font-semibold text-[#4B573C] '>Kitchen</div>
          <div><Switch {...label} defaultChecked /></div>
        </div>
        <div className='flex justify-between items-center pt-5 pl-8 pr-8'>
          <div className='text-[20px] font-semibold text-[#4B573C] '>Bedroom</div>
          <div><Switch {...label} defaultChecked /></div>
        </div>
        <div className='flex justify-between items-center pt-5 pl-8 pr-8'>
          <div className='text-[20px] font-semibold text-[#4B573C] '>Corridor</div>
          <div><Switch {...label} defaultChecked /></div>
        </div>
        
      </div>
    </div>
    <div className='h-[100%]'>
    <div className=''>
        <div className='text-[#4B573C] text-[25px] font-bold pt-3 flex justify-center items-center'>Control Pannel 2</div>
        <div className='pl-8 pt-7'><HiOutlineLightBulb className='text-4xl text-red-900'/></div>
        <div className='flex justify-between items-center pt-4 pl-8 pr-8'>
          <div className='text-[20px] font-semibold text-[#4B573C] '>Main</div>
          <div><Switch {...label} defaultChecked /></div>
        </div>
        <div className='flex justify-between items-center pt-4 pl-8 pr-8'>
          <div className='text-[20px] font-semibold text-[#4B573C] '>Kitchen</div>
          <div><Switch {...label} defaultChecked /></div>
        </div>
        <div className='flex justify-between items-center pt-4 pl-8 pr-8'>
          <div className='text-[20px] font-semibold text-[#4B573C] '>Bedroom</div>
          <div><Switch {...label} defaultChecked /></div>
        </div>
        <div className='flex justify-between items-center pt-4 pl-8 pr-8'>
          <div className='text-[20px] font-semibold text-[#4B573C] '>Corridor</div>
          <div><Switch {...label} defaultChecked /></div>
        </div>
        
      </div>
    </div>
    
   </div>
</div>
    </div>
  );
}

export default App;
