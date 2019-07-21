import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function BurgerMenu() {
    const [isExpanded, toggleExpansion] = useState(false);

    return (
    <>
        <button
        className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
        onClick={() => toggleExpansion(!isExpanded)}
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } md:block md:flex md:items-center w-full md:w-auto`}
      >
        <div className="text-lg">
          <Link
            to="/"
            className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
          >
            About
          </Link>

          <Link
            to="/add"
            className="block md:inline-block mt-4 md:mt-0 no-underline text-white"
          >
            Add another robot
          </Link>
        </div>
      </div>
    </>
    )
}

export default BurgerMenu