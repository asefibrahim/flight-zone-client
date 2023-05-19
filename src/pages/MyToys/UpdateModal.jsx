import React from 'react';
import Swal from 'sweetalert2';

const UpdateModal = ({ product, products, setProducts, }) => {

    console.log(product);
    const { _id, toyImage, price, quantity, ratings, category, toyName } = product

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const toyName = form.name.value
        const price = form.price.value
        const quantity = form.quantity.value
        const description = form.description.value
        const updateInfo = {
            toyName, price, quantity, description
        }
        console.log(updateInfo);
        fetch(` http://localhost:5000/addedToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    const remaining = products.filter(pd => pd._id !== _id)
                    console.log(remaining);
                    const updatedOne = products.find(pd => pd._id === _id)
                    console.log(updatedOne);
                    updatedOne.toyName = toyName
                    updatedOne.price = price
                    updatedOne.quantity = quantity
                    updatedOne.description = description
                    const setUpdatedData = [...remaining, updatedOne]
                    setProducts(setUpdatedData)
                }

            })

    }



    return (






        <div className="modal" id="my-modal-2">
            <div className="modal-box bg-slate-100">


                <form onSubmit={handleUpdate} action="" class="space-y-4">
                    <div>
                        <label for="name">Toy  Name</label>
                        <input
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Enter Update Product name"
                            type="text"


                            name='name'
                        />
                    </div>

                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label  >Price</label>
                            <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Enter Update Price"
                                type="text"
                                name='price'


                            />
                        </div>

                        <div>
                            <label for="phone">Available Quantity</label>
                            <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Enter Update Quantity"
                                type='text'
                                name='quantity'
                            />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                        <div>
                            <input
                                class="peer sr-only"
                                id="option1"
                                type="radio"
                                tabindex="-1"
                                name="option"
                            />

                            <label
                                for="option1"
                                class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                tabindex="0"
                            >
                                <span class="text-sm font-medium"> Option 1 </span>
                            </label>
                        </div>

                        <div>
                            <input
                                class="peer sr-only"
                                id="option2"
                                type="radio"
                                tabindex="-1"
                                name="option"
                            />

                            <label
                                for="option2"
                                class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                tabindex="0"
                            >
                                <span class="text-sm font-medium"> Option 2 </span>
                            </label>
                        </div>

                        <div>
                            <input
                                class="peer sr-only"
                                id="option3"
                                type="radio"
                                tabindex="-1"
                                name="option"
                            />

                            <label
                                for="option3"
                                class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                tabindex="0"
                            >
                                <span class="text-sm font-medium"> Option 3 </span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label for="message">Description</label>

                        <input
                            class="w-full h-28 rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Write Update description"
                            rows="8"
                            id="message"
                            name='description'
                        ></input>
                    </div>

                    <div class="mt-4">
                        <button type='submit'

                            class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                        >
                            Send Enquiry
                        </button>
                    </div>
                </form>
                <div className="modal-action">
                    <a href="#" className="btn">Yay!</a>
                </div>

            </div>
        </div>






    );
};

export default UpdateModal;