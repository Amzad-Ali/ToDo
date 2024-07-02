import React from 'react'

export default function Header() {
  return (
    <header>
        <div className='logo'>
                <img src="https://www.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg" alt="Taskmate Logo" />
                <span>Taskmate</span>
        </div>

        <div className='themeSelector'>
        <span className="light"></span>
            <span className="medium"></span>
            <span className="dark activeTheme"></span>
            <span className="gOne"></span>
            <span className="gTwo"></span>
            <span className="gThree"></span>
        </div>
    </header>
  )
}

