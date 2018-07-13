import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <header>
    <Link to="/">Other Pieces</Link>
    <Link to="/posts">Recent Posts</Link>
    <Link to="/about">About</Link>
  </header>
)

export default Header;
