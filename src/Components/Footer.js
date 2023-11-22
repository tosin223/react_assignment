import '../Css/Footer.css'
const Footer = ()=> {
    return (
        <footer lassName="footer-section">
            <div className="footer-container">
                <div className="right-footer-section">
                    <div className="righht-footer-address">
                        <i className="fa-solid fa-location-dot"></i>
                        <address>
                            8502 presston Rd.inglewood
                            maine 98380 usa
                        </address>
                    </div>
                    <div className="righht-footer-email">
                        <i className="fa-solid fa-envelope"></i>
                        <a href="mailto:akinsemoyintosin1@gmail.com">
                            akinsemoyintosin1@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-navbar">
                <a href="#">Demos</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Pages</a>
                <a href="#">Contact</a>
            </div>
        </footer>
    )
}
export default Footer
