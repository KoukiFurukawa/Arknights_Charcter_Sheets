import React from 'react';
import Link from 'next/link';
import { userMenuData } from '@/app/_utils/user_menu_data';
import { loginKey } from '@/app/_interfaces/interfaces';

function UserMenu({name, userId}: loginKey) {
    return (
        <div className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 fixed top-8 right-0" id="dropdown-user">
            <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 dark:text-white" role="none">
                {name}
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                {userId}
                </p>
            </div>
            <ul className="py-1" role="none">
                {userMenuData.map((value, key) => {
                    return (
                        <li key={key}>
                            <Link href={value.path} className={"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"} role='menuitem'>
                                {value.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UserMenu;
