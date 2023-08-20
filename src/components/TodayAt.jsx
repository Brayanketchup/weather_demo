import React from 'react'

const TodayAt = () => {
    return (

        <div className='flex flex-row flex-wrap w-[300px] md:w-fit lg:w-fit '>


            <div className='bg-[#1C1B1F] rounded-3xl flex flex-col text-center text-white text-md justify-center h-[120px] w-[85px] mt-2 mr-3'>
                <h1 className='m-1 '>11 PM</h1>
                <img className='m-1 w-6 self-center' src="src\assets\icons-cloud.png" alt="icon" />
                <h2 className='m-1 '>45*</h2>
            </div>

            <div className='bg-[#1C1B1F] rounded-3xl flex flex-col text-center text-white text-md justify-center h-[120px] w-[85px] mt-2 mr-3'>
                <h1 className='m-1 '>12 PM</h1>
                <img className='m-1 w-6 self-center' src="src\assets\icons-cloud.png" alt="icon" />
                <h2 className='m-1 '>75*</h2>
            </div>

            <div className='bg-[#1C1B1F] rounded-3xl flex flex-col text-center text-white text-md justify-center h-[120px] w-[85px] mt-2 mr-3'>
                <h1 className='m-1 '>1 AM</h1>
                <img className='m-1 w-6 self-center' src="src\assets\icons-cloud.png" alt="icon" />
                <h2 className='m-1 '>65*</h2>
            </div>


        </div>


    )
}

export default TodayAt