import React from 'react';

const Gallery = () => {
    return (
        <div className='w-5/6 mx-auto'>


            <h1 className='text-6xl text-center my-12 '>Buy Amazing Toy Aircraft </h1>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50 ">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src="https://images.unsplash.com/photo-1676227885420-959ccf9ebd16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://content.instructables.com/FAL/6NMO/GHFK85A1/FAL6NMOGHFK85A1.png?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=25b9f9e6aba00ba2c1169b7333186b66" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1662348318167-d521a9524cce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=712&q=80" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1683624306684-2075194e4394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1521405924368-64c5b84bec60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" />


                </div>
            </section>

        </div>
    );
};

export default Gallery;