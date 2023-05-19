import React from 'react';
import { Rating } from '@smastrom/react-rating'
import { FaUser, FaHive, FaStar } from 'react-icons/fa';

import '@smastrom/react-rating/style.css'
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {

    const data = useLoaderData()
    console.log(data);
    const { _id, toyImage, price, quantity, ratings, category, toyName, description, sellerName, sellerEmail
    } = data


    return (
        <div>


            <section
                class="overflow-hidden bg-[url(https://images.unsplash.com/photo-1679136578198-539e835445be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-top bg-no-repeat"
            >
                <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                            Quality Product
                        </h2>

                        <p className='text-center text-2xl text-gray-200 mt-12'>Home / 15 to 20 Years / Aircraft Toy</p>

                        <div class="mt-4 sm:mt-8">
                            <a
                                href="#"
                                class="inline-block rounded-full bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Yours Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>




            <section className='mt-12'>
                <div class="relative mx-auto max-w-screen-xl px-4 py-8">
                    <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                        <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                            <img
                                alt="Les Paul"
                                src={toyImage}
                                class="aspect-square w-full rounded-xl object-cover"
                            />


                        </div>

                        <div class="sticky top-0">
                            <strong
                                class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
                            >
                                Pre Order
                            </strong>

                            <div class="mt-8 flex justify-between">
                                <div class="max-w-[35ch] space-y-2">
                                    <h1 class="text-xl font-bold sm:text-2xl">
                                        {toyName}
                                    </h1>

                                    <p class="text-sm">Highest Rated Product</p>

                                    <div className='w-24'>
                                        <Rating readOnly></Rating>
                                    </div>
                                </div>

                                <p class="text-lg font-bold me-12">$  {price}</p>
                            </div>

                            <div class="mt-4">
                                <div class="prose max-w-none">
                                    <p>
                                        {description}
                                    </p>
                                </div>

                                <button class="mt-2 text-sm font-medium underline">Read More</button>
                            </div>




                            <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <FaStar></FaStar>

                                <h1 class="px-2 text-sm"> <p> <span className='font-bold'>Review Ratings : </span>       {ratings} </p></h1>
                            </div>
                            <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <FaHive></FaHive>

                                <h1 class="px-2 text-sm"> <p> <span className='font-bold'>Available Quantity :</span>      {quantity}  Pieces</p></h1>
                            </div>
                            <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <FaUser></FaUser>

                                <h1 class="px-2 text-sm"> <p> <span className='font-bold'>Seller  :</span>     {sellerName}</p></h1>
                            </div>




                            <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <svg aria-label="email icon" class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" />
                                </svg>

                                <h1 class="px-2 text-sm"> <p> <span className='font-bold'>Email  :</span>     {sellerEmail}</p></h1>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SingleToy;