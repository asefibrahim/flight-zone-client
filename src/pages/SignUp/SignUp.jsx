import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { createUser } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        const form = e.target
        const name = form.name.value
        const imageUrl = form.image.value
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(name, imageUrl, email);

        if (password !== confirm) {
            setError('Password Did not Match')
            return
        }
        if (password.length < 6) {
            setError('Password Should Be At Least Six Characters long')
            return
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user);

                const loggedUser = result.user
                loggedUser.photoURL = imageUrl
                loggedUser.displayName = name
                setSuccess("Account has been created Successfully")
                form.reset()
            })
            .catch(error => {
                setError(error.message)
            })



    }

    return (
        <div>

            <div class="relative bg-[url(https://images.unsplash.com/photo-1495764506633-93d4dfed7c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80)] bg-cover bg-center bg-no-repeat h-[700px] ">
                <div class="flex items-center justify-center w-full h-full    absolute inset-0 bg-black/60 ">



                    <section class=" dark:bg-gray-900">
                        <div class=" flex items-center justify-center px-10">
                            <form onSubmit={handleSubmit}>


                                <div class="flex items-center justify-center text-5xl font-bold text-gray-200 mt-6 mb-20">
                                    <h1>Sign up </h1>
                                </div>

                                <div class="relative flex items-center mt-8">
                                    <span class="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>

                                    <input type="text" class="block w-96 md:w-[500px] py-3 text-gray-300bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        placeholder="Username"

                                        name='name' required />
                                </div>

                                <label for="dropzone-file" class="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-300 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>

                                    <h2 class="mx-3 text-gray-400">Profile Photo</h2>

                                    <input className='bg-slate-100 rounded border border-purple-400' type="text" name='image' />
                                </label>

                                <div class="relative flex items-center mt-6">
                                    <span class="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>

                                    <input type="email" class="block w-full py-3 text-gray-300bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" name='email' required />
                                </div>

                                <div class="relative flex items-center mt-4">
                                    <span class="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>

                                    <input type="password" class="block w-full px-10 py-3 text-gray-300bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" name='password' required />
                                </div>

                                <div class="relative flex items-center mt-4">
                                    <span class="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>

                                    <input type="password" class="block w-full px-10 py-3 text-gray-300bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password" name='confirm' required />
                                </div>
                                <p className='text-red-500 text-lg font-semibold pt-3 text-center'>{error}</p>
                                <p className='text-green-400 text-lg font-semibold pt-3 text-center' >{success}</p>

                                <div class="mt-10">
                                    <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-gray-300 capitalize transition-colors duration-300 transform bg-amber-700
                                    rounded-lg hover:bg-slate-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Sign Up
                                    </button>

                                    <div class="mt-6 text-center ">
                                        <Link to='/login' class="text-sm text-gray-300 hover:underline dark:text-blue-400">
                                            Already have an account? Please Login !
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>



                </div>
            </div>

        </div>
    );
};

export default SignUp;