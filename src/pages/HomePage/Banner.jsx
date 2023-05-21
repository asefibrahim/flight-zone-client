import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1679136578198-539e835445be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full  " />

                <div className="absolute flex items-center  w-full  bg-gradient-to-t from-[#1d1c1c] to-[rgba(21,21,21,0.5)] h-[480px] mt-28 ps-16" data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='space-y-5 w-4/5  mb-48  mt-48 '>
                        <h1 className='text-gray-200 text-4xl  '>WE CAN <p className='mt-5'>MAKE YOUR CELEBRATION</p> <p className='text-orange-500 mt-5'> EXTRAORDINARY</p></h1>
                        <p className='text-gray-200 text-lg w-3/4'>While they might seem like toys , A high quality drone is a serious investment . We have flown plenty and there are a lot of good performance.Keeping your eye on the ball</p>


                        <button className='btn btn-outline btn-secondary px-10'> Get started</button>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Banner;