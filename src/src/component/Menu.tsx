import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {PAGES} from "../App";

const Menu: React.FC = () => {
    const {
        pathname
    } = useLocation()
    const onMenuItemClick = (linkName: string) => {
        document.title = `Siit - ${linkName}`
    }
    return (
        <>
            <ul className="text-sm font-medium text-center divide-x shadow sm:flex border-b-primary border-2">
                {
                    Object.keys(PAGES).map(key => {
                        const link = PAGES[key];
                        if(link.hide){
                           return null
                        }
                        return (
                            <li className={`w-full text-gray-900`} key={link.route}>
                                <Link
                                    onClick={() => onMenuItemClick(link.name)}
                                    to={link.route}
                                    className={`inline-block p-4 w-full bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 ${pathname.includes(link.route) ? "bg-primary text-white" : "text-primary"}`}
                                    aria-current="page">{link.name}</Link>
                            </li>
                        )
                    })
                }

            </ul>
        </>
    )
}

export default Menu
