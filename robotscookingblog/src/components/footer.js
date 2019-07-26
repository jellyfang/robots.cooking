import { Link } from "gatsby"
import React from "react"

function Footer() {
    return (
        <nav className="bg-black font-mono">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex flex-wrap justify-between text-xs text-white">
                    2019 Robots Cooking
                </div>
                {/* <ul className="inline-flex">
                    <li className="">
                        <Link
                            to="/privacy"
                            className="text-sm text-blue-500 hover:text-blue-800 uppercase mr-10"
                        >
                            Privacy
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            to="/colophon"
                            className="text-sm text-blue-500 hover:text-blue-800 uppercase"
                        >
                            Colophon
                        </Link>
                    </li>
                </ul> */}
            </div>
        </nav>
    )
}

export default Footer