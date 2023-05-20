import React from 'react';

const Gallery = () => {
    return (
        <div className=' mx-auto mb-28'>


            <h1 className='text-6xl text-center my-12 '>Buy Amazing Toy Aircraft </h1>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50 ">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src="https://images.unsplash.com/photo-1603923407797-2d25dfbbb1a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="w-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-60 dark:bg-gray-500 aspect-square" src="https://accurcsimulator.com/wp-content/uploads/2019/05/agile55.png" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-60 dark:bg-gray-500 aspect-square" src="https://accurcsimulator.com/wp-content/uploads/2019/05/harvard.png" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-60 dark:bg-gray-500 aspect-square" src="https://accurcsimulator.com/wp-content/uploads/2017/07/ChameleonThumb.png" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-60 dark:bg-gray-500 aspect-square" src="https://accurcsimulator.com/wp-content/uploads/2019/05/DJI-Phantom.png" />


                </div>
            </section>

        </div>
    );
};

export default Gallery;