import React ,{ useState } from 'react'
import "./footer.css"
import { RxCrossCircled } from "react-icons/rx";

const Footer = (SetOpen) => {
  const [count,setCount]=useState(1);
    const[ click, setClick]=useState(false);
    const [select,setSelect]=useState(false);
  return (
    <div className='bg-[#fff]'>
        <div className='fixed w-full h-screen top-0 bg-[#00000030] z-40 flexx items-center justify-between'>
                    <div className='w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75px] bg-white rounded-md
                    shadow-sm relative p-4'>
                        <RxCrossCircled size={30} className="absolute right-3 top-3 z-50"
                        onClick={()=> SetOpen(false)}/>
                    </div>
                </div>
    </div>
  )
}

export default Footer