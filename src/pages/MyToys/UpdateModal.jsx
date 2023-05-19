import React from 'react';

const UpdateModal = ({ product, handleUpdate }) => {

    console.log(product);
    const { _id, toyImage, price, quantity, ratings, category, toyName } = product


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