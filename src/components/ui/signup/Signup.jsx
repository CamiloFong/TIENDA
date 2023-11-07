import React from 'react'
import styles from '../signup/styles.module.css'

export function Signup(){
    const className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    return(
        <div className="container">
            <div className="formBx">
                <div className="form signupForm">
                    <form>
                        <h3>Sign Up</h3>
                        <input className={className} type="text" name="" placeholder="Username" />
                        <input className={className} type="email" name="" placeholder="Email" />
                        <input className={className} type="password" name="" placeholder="Password" />
                        <input className={className} type="password" name="" placeholder="Confirm Password" />
                        <input className={className} type="country" name="" placeholder="Country" />
                        <input className={className} type="text" name="" placeholder="State" />
                        <input className={className} type="text" name="" placeholder="City" />
                        <input className={className} type="text" name="" placeholder="Adress" />
                        <input className={className} type="text" name="" placeholder="Phone" />
                        <input type="submit" name="" placeholder="Register" />
                    </form>
                </div>
            </div>
        </div>
    )
}