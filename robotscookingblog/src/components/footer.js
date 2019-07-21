import { Link } from "gatsby"
import React from "react"

function Footer() {
    return (
        <nav className="bg-black font-mono">
            <div className="text-gray-500 font-mono flex flex-wrap justify-between items-center max-w-4xl p-6">
                <div className="flex flex-wrap justify-between text-xs">
                    2019 Robots Cooking
                </div>
                <div className="">
                    <ul className="flex flex-wrap justify-between">
                        <li className="mr-6">
                            <a className="text-sm text-blue-500 hover:text-blue-800 uppercase" href="#">Add a new robot</a>
                        </li>
                        <li className="mr-6">
                            <a className="text-sm text-blue-500 hover:text-blue-800 uppercase" href="#">About</a>
                        </li>
                        <li className="mr-6">
                            <a className="text-sm text-blue-500 hover:text-blue-800 uppercase" href="#">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Footer