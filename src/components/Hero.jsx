const Hero = () => {
    return (
        /* Hero */
        <main className="hero">
            {/* text and button content */}
            <div className="heroContent">
                {/* heading */}
                <h1>Music Man Jason Richardson Cutlass</h1>

                {/* brief intro/info */}
                <p>The Ernie Ball Music Man Jason Richardson Artist Series Cutlass guitar is a collaboration between the Ernie Ball Music Man and Jason Richardson. Featuring an innovative design engineered specifically for Jason, the Richardson Artist Series Cutlass offers unique features and aesthetics.</p>

                {/* buttons to official cite */}
                <div className="heroButton">
                    <button>View More</button>
                    <button>Other Guitars</button>
                </div>

                {/* shop for product - website list */}
                <div className="shopNow">
                    <p>ShopNow</p>

                    <div className="shopNowLogos">
                        <img src="public/images/sweetwater-logo-vector.png" alt="sweetwater" />
                    </div>
                </div>
            </div>

            {/* main product image */}
            <div className="heroImage"><img src="public/images/product-musicman-jr.png" alt="richardson-cutlass" /></div>

        </main>
    )
}
export default Hero