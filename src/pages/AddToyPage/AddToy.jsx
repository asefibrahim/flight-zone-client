import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddToy = () => {
    const { user } = useContext(AuthContext)
    useTitle('addToy')
    const handleAddToy = (e) => {
        e.preventDefault()
        const form = e.target
        const toyName = form.name.value

        const toyImage = form.toyImage.value
        const price = form.price.value
        const ratings = form.ratings.value
        const sellerName = form.sellerName.value
        const category = form.select.value
        const quantity = form.quantity.value
        const sellerEmail = user?.email
        const description = form.description.value
        console.log(toyImage, toyImage, price, ratings, sellerName, category, quantity, sellerEmail, description);

        const totalInfo = {
            toyImage, toyName, price, ratings, sellerName, category, quantity, sellerEmail, description
        }
        console.log(totalInfo);
        fetch('http://localhost:5000/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(totalInfo)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }



    return (

        <div className='w-3/4 mx-auto mt-24'>
            <form onSubmit={handleAddToy} class="w-full ">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Toy  Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane" name='name' />

                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Toy Image
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Image Url"
                            name='toyImage' />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Price
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane" name='price' />

                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Ratings
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Image Url" name='ratings' />
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Seller Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Albuquerque" name='sellerName' />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Product Category
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='select'>
                                <option>RC Helicopter</option>
                                <option>RC Drone</option>
                                <option>RC Aircraft</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Quantity
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="90210" name='quantity' />
                    </div>
                    <div class="w-full mt-5 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Seller Email
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="Email" name='email'
                            value={user?.email} readOnly />
                    </div>

                </div>
                <div class="w-full mb-6 mt-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Description
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-10 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name='description' />
                </div>

                <div class="mt-4 text-center mb-20">
                    <button
                        type="submit"
                        class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                        Send Enquiry
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddToy;