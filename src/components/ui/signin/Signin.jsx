import React from 'react'
import styles from '../signin/styles.module.css'

export function Signin(){
    return(
        <div className="container">
            <div className="formBx">
                <div className="form signinForm">
                    <form>
                        <h3>Sign In</h3>
                        <input 
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            type="text" 
                            name="" 
                            placeholder="Username" 
                        />
                        <input 
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            type="password" 
                            name="" 
                            placeholder="Password" 
                        />
                        <button type='submit'>
                            Login
                        </button>
                        <a href="/" className="forgot">Forgot Password?</a>
                    </form>
                </div>
            </div>
            <div className="box signup">
                <h2 className='text-center'>Don't have an account?</h2>
            </div>
        </div>
    )
}