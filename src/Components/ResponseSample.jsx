import React, { useState } from "react";

const ResponseSample = (props) => {
    const [responseNumber, setResponseLanguage] = useState(0)
    const handleresponseNumber = (i) => setResponseLanguage(i)
    return (
        <>
          <p className='mt-[2%] mx-[5%] font-bold text-xl rounded-md '>Response samples</p>
            <div className='flex mx-[5%] space-x-2 mt-[1%] rounded-md text-red-200'>
              <p className={ responseNumber == 0 ? 'bg-white px-2 py-1 text-black rounded-md rounded-md text-green-600' : 'bg-[#11171a] px-2 py-1 text-black rounded-md rounded-md text-green-600' } onClick={() => { handleresponseNumber(0) }}>200</p>
              <p className={ responseNumber == 1 ? 'bg-white px-2 py-1 rounded-md rounded-md text-red-600' : 'bg-[#11171a] px-2 py-1 rounded-md rounded-md text-red-600' } onClick={() => { handleresponseNumber(1) }}>400</p>
              <p className={ responseNumber == 2 ? 'bg-white px-2 py-1 rounded-md rounded-md text-red-600' : 'bg-[#11171a] px-2 py-1 rounded-md rounded-md text-red-600' } onClick={() => { handleresponseNumber(2) }}>401</p>
              <p className={ responseNumber == 3 ? 'bg-white px-2 py-1 rounded-md rounded-md text-red-600' : 'bg-[#11171a] px-2 py-1 rounded-md rounded-md text-red-600' } onClick={() => { handleresponseNumber(3) }}>429</p>
              <p className={ responseNumber == 4 ? 'bg-white px-2 py-1 rounded-md rounded-md text-red-600' : 'bg-[#11171a] px-2 py-1 rounded-md rounded-md text-red-600' } onClick={() => { handleresponseNumber(4) }}>500</p>

            </div>
            <div className='bg-[#11171a] mx-[5%] mt-[2%] py-[1%] mb-[1%]'>
              <p className='mx-[2%] space-x-2  pb-[1%]'>Content type application/json</p>
              <div className='mx-[2%] mt-[2%] space-x-2 overflow-x-scroll pb-[1%] flex flex-col'>
                <span>&#123;</span>
                <span className='px-[3%]'>"hints" :  &#123;</span>
                <span className='pl-[6%]'>"visited_nodes.sum": 58,</span>
                <span className='pl-[3%]'>&#125;,</span>
                <span className='pl-[3%]'>"paths":[</span>    
                <span className='pl-[6%]'>&#123; 9.2132 , 36.1232 &#125;,</span>
                <span className='pl-[6%]'>&#123; 9.2132 , 36.1232 &#125;,</span>
                <span className='pl-[6%]'>&#123; 9.2132 , 36.1232 &#125;,</span>
                <span className='pl-[6%]'>&#123; 9.2132 , 36.1232 &#125;,</span>
                <span className='pl-[6%]'>&#123; 9.2132 , 36.1232 &#125;,</span>
                <span className='pl-[6%]'>&#123; 9.2132 , 36.1232 &#125;,</span>
                <span className='pl-[3%]'>]</span>
                <span className=''>&#125;</span>
              </div>
            </div>  
        </>  
    );
}

export default ResponseSample