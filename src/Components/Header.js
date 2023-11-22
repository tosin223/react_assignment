import '../Css/Header.css'
import '../Asset/logo1.png'
const Header = () => {
  return (
    <header>
        <div className="logo">
             <img src="../Asset/logo1.png" alt="website logo" /> 
             <p>Fintech</p>
        </div>
        <nav>
            <ul className="nav-links">
                <li><a class="active" href="#">Demos</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="Sign-up-container">
                <a class="sigi-in-text" href="#">Sign in</a>
                <a href="#"><button>Get Started</button></a>
            </div>
        </nav>
</header>

  )
}

export default Header
/*

    <header>
        <div className="logo">
            <img src="Images/logo1.png" alt="website logo">
            <P>Fintech</P>
        </div>
        <!--navigation links-->
        <nav>
            <ul className="nav-links">
                <li><a class="active" href="#">Demos</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="Sign-up-container">
                <a class="sigi-in-text" href="#">Sign in</a>
                <a href="#"><button>Get Started</button></a>
            </div>
        </nav>
        <!--end of head of header section-->
    </header>


*/
