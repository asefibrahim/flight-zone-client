import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1557002606-2df64438a438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full " />

                <div className="absolute flex items-center  w-full bg-gradient-to-r from-[#312f2f] to-[rgba(21,21,21,0.5)] h-full text-center">
                    <div className='space-y-7 w-3/4 mx-auto'>
                        <h1 className='text-gray-200 text-5xl font-bold'>Affordable price for car servicing</h1>
                        <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorem voluptatem illum, mollitia obcaecati quas maiores. Adipisci saepe eius ex, asperiores, qui voluptatibus ut earum, consequuntur excepturi neque officia totam!</p>

                        <button className='btn btn-primary mr-5'>Discover More </button>
                        <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;