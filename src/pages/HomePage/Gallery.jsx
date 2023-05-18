import React from 'react';

const Gallery = () => {
    return (
        <div className=' mx-auto mb-28'>


            <h1 className='text-6xl text-center my-12 '>Buy Amazing Toy Aircraft </h1>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50 ">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src="https://img.freepik.com/free-photo/little-girl-playing-with-toy-plane-field_1303-32050.jpg?w=1480&t=st=1684420189~exp=1684420789~hmac=dc846e5888835cbfda92b642eb221184a4ae40cfaaac88befb25aaf891640ac9" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
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