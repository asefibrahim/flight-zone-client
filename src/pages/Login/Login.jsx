import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('login')
    const { login, googleLogin } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from.pathname || '/'

    const handleLogin = (e) => {
        e.preventDefault()
        setError('')
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        login(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('You Have Successfully Logged in')
                setSuccess('Logged in successfully')
                form.reset()
                navigate(from, { replace: true })

            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                setSuccess("You Have Successfully Logged in by Google")
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div class="relative bg-[url(https://images.unsplash.com/photo-1495764506633-93d4dfed7c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80)] bg-cover bg-center bg-no-repeat h-[700px]">


            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8  w-full h-full    absolute inset-0 bg-black/60 ">
                <div class="mx-auto max-w-lg">
                    <h1 class="text-center text-2xl font-bold text-white sm:text-3xl">
                        Please Sign in
                    </h1>



                    <form onSubmit={handleLogin}

                        class="mb-0 mt-6 space-y-7 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 "
                    >

                        <div>
                            <label for="email" class="sr-only">Email</label>

                            <div class="relative">
                                <input
                                    type="email"
                                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                    name='email'
                                    required
                                />

                                <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label for="password" class="sr-only">Password</label>

                            <div class="relative">
                                <input
                                    type="password"
                                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                    name='password'
                                    required
                                />

                                <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            class="block w-full rounded-lg bg-amber-700 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>
                        <a onClick={handleGoogleLogin} class="flex items-center justify-center mt-4 text-gray-200 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-800 hover:bg-gray-800 dark:hover:bg-gray-600">
                            <div class="px-4 py-2">
                                <svg class="w-6 h-6" viewBox="0 0 40 40">
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                </svg>
                            </div>

                            <span class="w-5/6 px-4 py-3 font-bold text-center">Sign in  with Google</span>
                        </a>
                        <div className='text-center'>
                            <p className='text-red-500'>{error}</p>


                            <p className='text-green-500'>{success}</p>
                        </div>
                        <p class="text-center text-sm text-gray-200">
                            Don't have an account ?
                            <Link class="underline" to="/signup">  Sign up !</Link>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;