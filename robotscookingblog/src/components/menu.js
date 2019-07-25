import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Menu() {
    const [isExpanded, toggleExpansion] = useState(false);

    return (
    <>
        <ul className="inline-flex">
            <li className="">
                <Link
                    to="/"
                    className="px-4 text-xs uppercase"
                >
                    All Robots
                </Link>
            </li>
            <li className="">
                <Link
                    to="/new"
                    className="px-4 text-xs uppercase"
                >
                    Add new robot
                </Link>
            </li>
            <li className="">
                <Link
                    to="/about"
                    className="px-4 text-xs uppercase"
                >
                    About
                </Link>
            </li>
            <li className="">
                <Link
                    to="/subscribe"
                    className="px-4 text-xs uppercase"
                >
                    Subscribe
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