'use client';

import React from 'react';

const LoginPage = () => {
    return (
        <div className="login-page text-black flex-1 flex flex-col items-center justify-center min-h-screen font-mono">   
            <h1 className='font-bold text-3xl mb-9'>Login</h1>
            <form className='lg:w-1/3 w-full px-6 lg:px-0' onSubmit={(e) => {
                e.preventDefault();
                // Handle login logic here
                console.log('Login form submitted', e.target['email'].value, e.target['password'].value);
            }}>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required className='border-gray-200 border-2 rounded-md px-2 py-3' />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required className='border-gray-200 border-2 rounded-md px-2 py-3' />
                </div>
                <button type="submit" className='p-2 bg-gray-700 w-full text-white rounded-md'>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;