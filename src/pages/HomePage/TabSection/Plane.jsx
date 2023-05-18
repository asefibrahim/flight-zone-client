import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Plane = ({ plane }) => {

    const { img, name, price, ratings } = plane




    return (
        <div>
            <div class="max-w-xl overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800">
                <div class="px-4 py-2">
                    <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">{name}</h1>
                    <p class="mt-1 font-bold text-lg
                    text-gray-600 dark:text-gray-400">
                        Price : $ {price}
                    </p>
                </div>

                <img class="object-cover w-full h-60 mt-2" src={img} alt="NIKE AIR" />

                <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <div class=" w-[150px] text-white flex items-center gap-3"> <p className='font-semibold  '>     {ratings}</p> <p><Rating value={ratings} readOnly></Rating></p></div>
                    <button class="px-2 py-1 text-xs font-semibold uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Plane;