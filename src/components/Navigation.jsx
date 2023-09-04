const Navigation = () => {
    return (
        /* navigation bar */
        <nav>
            {/* logo */}
            <div className="logo">
                <img src="public/images/logo-flux-echo.jpg" alt="image_logo"/>
            </div>
            
            {/* navigation links */}
            <ul>
                <li href="#menu">Menu</li>
                <li href="#about">About</li>
                <li href="#sources">Sources</li>
                <li href="#contact">Contact</li>
            </ul>

            {/* login button */}
            <button>Login</button>

        </nav>
    )
}

export default Navigation