import '../Css/Main.css'
const Main = () => {
  return (
    <section className="hero-section">
        <div className="hero-container">
            <div className="left-hero-container">
                <div className="hero-text">
                    <h1>
                        The next gen<br />
                        payment<br />
                        method.
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut <br /> eu. Id viverra libero est n</p>
                    <a href="#"><button>Get Started</button></a>
                </div>
                <div className="card-success-container">
                    <div className="card-success division-line">
                        <h5>2943</h5>    
                            <p>
                                Cards<br />
                                delivered
                            </p>
                    </div>
                    <div className="card-success">
                        <h5>$1M+</h5>
                        <p>Transaction<br /> Completed</p>
                    </div>
                </div>
            </div>
            <div className="right-hero-img">
                <div className="man-image">
                    <img src="Images/man-1 1 1.png" alt="picture of a man"  width="400px" />
                </div>
                <div className="card-hero-image">
                    <img src="Images/Card 1 1.png" alt="picture of a credit card" />
                </div>
                <div className="curly-arrow">
                    <img src="Images/curly arrow.png" alt="image of a curly arrow" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main

/*
  <section className="hero-section">
        <div className="hero-container">
            <div className="left-hero-container">
                <div className="hero-text">
                    <h1>
                        The next gen<br>
                        payment<br>
                        method.
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut <br>eu. Id viverra libero est n</p>
                    <a href="#"><button>Get Started</button></a>
                </div>
                <div className="card-success-container">
                    <div className="card-success division-line">
                        <h5>2943</h5>    
                            <p>
                                Cards<br>
                                delivered
                            </p>
                    </div>
                    <div className="card-success">
                        <h5>$1M+</h5>
                        <p>Transaction<br> Completed</p>
                    </div>
                </div>
            </div>
            <div className="right-hero-img">
                <div className="man-image">
                    <img src="Images/man-1 1 1.png" alt="picture of a man"  width="400px">
                </div>
                <div className="card-hero-image">
                    <img src="Images/Card 1 1.png" alt="picture of a credit card">
                </div>
                <div className="curly-arrow">
                    <img src="Images/curly arrow.png" alt="image of a curly arrow">
                </div>
            </div>
        </div>
    </section>



*/