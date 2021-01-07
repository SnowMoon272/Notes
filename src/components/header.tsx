import { Link } from "gatsby"
import React from "react"
import colors from "../utils/colors"
import PropTypes from "prop-types"
import PostitLogo from "../assets/svgs/post-it-brand-vector-logo.svg"
import NewNote from "./menus/new_note"

const Header = () => (
  <header
    style={{
      background: `${colors.pink}`,
      height: 'fit-content',
      padding: '1rem',
    }}
  >
    <div 
      style={{ 
        display:"flex", 
        alignItems:"center", 
        justifyContent: "space-between" }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          maxWidth: '80px',
          maxHeight: '80px'
        }}
      >
        <PostitLogo 
          style={{
            width: '100%', 
            height: '100%', 
            borderRadius: '50%'
          }} 
        />
      </Link>

      <NewNote>
        <>
            <span> + Nueva nota </span>
        </>
      </NewNote>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
