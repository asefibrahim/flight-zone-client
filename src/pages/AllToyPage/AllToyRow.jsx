import React from 'react';

const AllToyRow = () => {
    return (
        <tr>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div class="inline-flex items-center gap-x-3">


                    <div class="flex items-center gap-x-4">

                        <div>
                            <h2 class="font-medium text-gray-800 dark:text-white ">sellername</h2>

                        </div>
                    </div>
                </div>
            </td>
            <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                    <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                    <h2 class="text-sm font-normal text-emerald-500">toyname</h2>
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap font-semibold">categoty</td>
            <td class="px-4 py-4 text-sm   text-gray-500 dark:text-gray-300 whitespace-nowrap"> Pieces</td>
            <td class="px-4 py-4 text-sm whitespace-nowrap">
                <div class="flex items-center gap-x-2 ">

                    <p class="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">
                        price
                    </p>
                </div>
            </td >
            <td class="px-4 py-4 text-sm whitespace-nowrap">
                <a
                    class="inline-block rounded-full border border-indigo-600  px-5 py-2 text-blue-400  btn-outline focus:ring active:text-indigo-500"

                >
                    <span > View Details </span>

                </a>

            </td>
        </tr >

    );
};

export default AllToyRow;