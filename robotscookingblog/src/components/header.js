import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Menu from "./menu"
import Logo from "./logo"

function Header({ siteTitle }) {
  
  return (
    <nav className="bg-white font-mono">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center no-underline">
          <Logo />
          {/* {siteTitle} */}
        </Link>
        <Menu />
      </div>
    </nav>
  )
}

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `black`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h3 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h3>
//     </div>
//   </header>
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `ROBOTS COOKING`,
}

export default Header
