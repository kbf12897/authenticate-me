import "./SplashPage.css";

function SplashPage() {
    return (
        <div className="spash-main">
            <img
                className="background-img"
                src="https://i.pinimg.com/originals/e0/30/cc/e030cc9cb5bea72381b9d1c2db813723.png"
                alt="lofi girl"
            ></img>
            <div className="right-side-splash">
                <h2>Discover and share your favorite study toons</h2>
                <div className="splash-signup">Signup for free</div>
            </div>
        </div>
    );
}

export default SplashPage;
