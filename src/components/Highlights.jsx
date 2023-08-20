import React from 'react'

const Highlights = () => {
    return (
        <div className='flex flex-col w-[300px] md:w-fit lg:w-fit h-fit bg-[#1C1B1F] p-5 rounded-3xl justify-around'>
            <h1 className='text-white'>
                Todays Highlights
            </h1>
            <div>
                <div className='flex flex-col lg:flex-row '>
                    {/* top dif */}
                    <div className=' flex flex-col bg-[#1b191d] p-5 m-2 rounded-3xl justify-around text-white'>
                        <h1 className=''>Sunrise & Sunset</h1>
                        <div className='flex flex-row'>
                            <div className='w-[150px] flex flex-row'>
                                <img className='h-6 self-end' src="src\assets\icons-cloud.png" alt="icon" />
                                <div className='flex flex-col'>
                                    <p className='text-xs text-zinc-500'>Sunrise</p>
                                    <h1 className='pl-2 text-xl'>6:00 AM</h1>
                                </div>
                            </div>
                            <div className='w-[150px] flex flex-row'>
                                <img className='h-6 self-end' src="src\assets\icons-cloud.png" alt="icon" />
                                <div className='flex flex-col'>
                                    <p className='text-xs text-zinc-500'>Sunset</p>
                                    <h1 className='pl-2 text-xl'>9:00 PM</h1>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className=' flex flex-col bg-[#1b191d] p-5 m-2 rounded-3xl justify-around text-white' >
                        <h3 className='text-xs text-zinc-500'>Humidity</h3>
                        <div className='flex flex-row place-content-between'>
                            <img className=' h-6 self-end' src="src\assets\icons-cloud.png" alt="Icon" />
                            <h1 className='pl-2 text-xl'>82%</h1>
                        </div>
                    </div>

                    <div className=' flex flex-col bg-[#1b191d] p-5 m-2 rounded-3xl justify-around text-white' >
                        <h3 className='text-xs text-zinc-500'>Wind</h3>
                        <div className='flex flex-row place-content-between'>
                            <img className=' h-6 self-end' src="src\assets\icons-cloud.png" alt="Icon" />
                            <h1 className='pl-2 text-xl'>4.5 mph</h1>
                        </div>
                    </div>

                </div>


                <div className='flex flex-col lg:flex-row'>
                    {/* right div */}
                    

                    <div className=' flex flex-col bg-[#1b191d] p-5 m-2 rounded-3xl justify-around text-white' >
                        <h3 className='text-xs text-zinc-500'>Feels like</h3>
                        <div className='flex flex-row place-content-between'>
                            <img className=' h-6 self-end' src="src\assets\icons-cloud.png" alt="Icon" />
                            <h1 className='pl-2 text-xl'>89* F</h1>
                        </div>
                    </div>
                    

                    <div className=' flex flex-col bg-[#1b191d] p-5 m-2 rounded-3xl justify-around text-white' >
                        <h3 className='text-xs text-zinc-500'>pressure</h3>
                        <div className='flex flex-row place-content-between'>
                            <img className=' h-6 self-end' src="src\assets\icons-cloud.png" alt="Icon" />
                            <h1 className='pl-2 text-xl'>1014 mb</h1>
                        </div>
                    </div>

                    <div className=' flex flex-col bg-[#1b191d] p-5 m-2 rounded-3xl justify-around text-white' >
                        <h3 className='text-xs text-zinc-500'>visibility</h3>
                        <div className='flex flex-row place-content-between'>
                            <img className=' h-6 self-end' src="src\assets\icons-cloud.png" alt="Icon" />
                            <h1 className='pl-2 text-xl'>7 miles</h1>
                        </div>
                    </div>

                    <div className=' flex flex-col bg-[#1b191d] p-5 m-2 rounded-3xl justify-around text-white' >
                        <h3 className='text-xs text-zinc-500'>Presipitation</h3>
                        <div className='flex flex-row place-content-between'>
                            <img className=' h-6 self-end' src="src\assets\icons-cloud.png" alt="Icon" />
                            <h1 className='pl-2 text-xl'>0 In</h1>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Highlights