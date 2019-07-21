import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Menu() {
    const [isExpanded, toggleExpansion] = useState(false);

    return (
    <>
        <ul className="flex">
            <li className="flex-2 mr-2">
                <Link
                    to="/"
                    className="text-center block py-2 px-4 text-white text-xs uppercase"
                >
                    All Robots
                </Link>
            </li>
            <li className="flex-2 mr-2">
                <Link
                    to="/"
                    className="text-center block py-2 px-4 text-white text-xs uppercase"
                >
                    Add new robot
                </Link>
            </li>
            <li className="flex-2 mr-2">
                <Link
                    to="/"
                    className="text-center block py-2 px-4 text-white text-xs uppercase"
                >
                    About
                </Link>
            </li>
            <li className="text-center flex-1 visible xs:invisible">
                <Link
                    to="/"
                    className="block py-2 px-4 text-white text-xs uppercase"
                >
                    Twitter
                </Link>
            </li>
        </ul>
        {/* <Link
            to="/"
            className="block mt-10 mb-2 md:inline-block md:mt-0 no-underline text-white text-sm uppercase"
          >
            All robots
        </Link>
        <Link
            to="/"
            className="block mt-10 mb-2 md:inline-block md:mt-0 no-underline text-white text-sm uppercase"
          >
            Add new robot
        </Link>
        <Link
        to="/"
        className="block mt-10 mb-2 md:inline-block md:mt-0 no-underline text-white text-sm uppercase"
        >
            About
        </Link> */}
    </>
    )
}

export default Menu