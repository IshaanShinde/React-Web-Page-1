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
                <li href="#">Menu</li>
                <li href="#">About</li>
                <li href="#">Sources</li>
                <li href="#">Contact</li>
            </ul>

            {/* login button */}
            <button>Login</button>

        </nav>
    )
}

export default Navigation