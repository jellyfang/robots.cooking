import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Menu() {
    const [isExpanded, toggleExpansion] = useState(false);

    return (
    <>
        <Link
            to="/"
            className="block mt-10 mb-2 md:inline-block md:mt-0 no-underline text-white text-sm uppercase"
          >
            All Robots
        </Link>
        <Link
            to="/"
            className="block mt-10 mb-2 md:inline-block md:mt-0 no-underline text-white text-sm uppercase"
          >
            Add New Robot
        </Link>
        <Link
        to="/"
        className="block mt-10 mb-2 md:inline-block md:mt-0 no-underline text-white text-sm uppercase"
        >
            About
        </Link>
    </>
    )
}

export default Menu