import React from 'react';
import { Link } from 'react-router-dom';

const AllToyRow = ({ singleProduct }) => {
    console.log(singleProduct);

    const { _id, toyImage, price, quantity, ratings, category, toyName, sellerName
    } = singleProduct

    return (
        <tr>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div class="inline-flex items-center gap-x-3">


                    <div class="flex items-center gap-x-4">

                        <div>
                            <h2 class="font-medium text-gray-800 dark:text-white ">{sellerName}</h2>

                        </div>
                    </div>
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap font-semibold">
                <p class="px-3 py-1 text-xs text-purple-500 rounded-full dark:bg-gray-800 bg-purple-100/60">{toyName}</p>

            </td>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap font-semibold">
                <p class="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">{category}</p>

            </td>
            <td class="px-4 py-4 text-sm   text-gray-500 dark:text-gray-300 whitespace-nowrap">{quantity} Pieces</td>
            <td class="px-4 py-4 text-sm whitespace-nowrap">
                <div class="flex items-center gap-x-2 ">

                    <p class="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">
                        $ {price}
                    </p>
                </div>
            </td >
            <td class="px-4 py-4 text-sm whitespace-nowrap">
                <Link to={`/allToy/${_id}`}
                    class="inline-block rounded-full border border-indigo-600  px-5 py-2 text-blue-400  btn-outline focus:ring active:text-indigo-500"

                >
                    <span > View Details </span>

                </Link>

            </td>
        </tr >

    );
};

export default AllToyRow;