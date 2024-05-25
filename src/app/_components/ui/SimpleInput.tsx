import React from 'react'
import { ISimpleInput } from '@/app/_interfaces/interfaces';

function SimpleInput(params: ISimpleInput) {
    return (
        <div>
            <label htmlFor={params.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{params.label}</label>
            <input type={params._type} name={params.id} id={params.id} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder={params.placeholder} required={params.require}>
            </input>
        </div>
    )
}

export default SimpleInput;
