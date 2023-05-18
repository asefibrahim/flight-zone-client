import React from 'react';

const SectionOne = () => {
    return (
        <div>
            <section>
                <div class="max-w-screen-xl mt-28 px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8 ">
                            <div class="max-w-md mx-auto text-center lg:text-left">
                                <header>
                                    <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">We Use The Best Drones
                                        & HD Cameras</h2>

                                    <p class="mt-4 text-gray-500">
                                        Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.
                                    </p>
                                </header>

                                <a
                                    href="#"
                                    class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                                >
                                    Shop All
                                </a>
                            </div>
                        </div>

                        <div class="lg:col-span-2 lg:py-8">
                            <ul class="grid grid-cols-2 gap-4">
                                <li>
                                    <a href="#" class="block group">
                                        <img
                                            src="https://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_02.png"
                                            alt=""
                                            class="object-cover w-full rounded hover:shadow-xl"
                                        />

                                        <div class="mt-3">
                                            <h3
                                                class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Simple Watch
                                            </h3>

                                            <p class="mt-1 text-sm text-gray-700">$150</p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="block group">
                                        <img
                                            src="https://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_01.png"
                                            alt=""
                                            class="w-full rounded hover:shadow-xl h-80"
                                        />

                                        <div class="mt-3">
                                            <h3
                                                class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Simple Watch
                                            </h3>

                                            <p class="mt-1 text-sm text-gray-700">$150</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SectionOne;