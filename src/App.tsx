import "./style/reset.css";
import "./App.css";
import logo from "./assets/LOGO.png";
import mainImg from "./assets/foneOne.png";
import mailLeftImg from "./assets/mainLeft.svg";
import mainRightImg from "./assets/mainRight.svg";
import services1 from "./assets/services1.svg";
import services2 from "./assets/services2.svg";
import services3 from "./assets/services3.svg";
import services4 from "./assets/services4.svg";

function App() {
  return (
    <>
      <header className="headerMain">
        <div className="header">
          <img src={logo} alt="" />
          <div className="headerRight">
            <nav>
              <a href="#">Home</a>
              <a href="#">About us</a>
              <a href="#">Services</a>
              <a href="#">Blog</a>
              <a/>
              <a href="#">
                <button className="btnContractUs">Contract us</button>
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <div className="main-fone">
          <img className="mailLeftImg" src={mailLeftImg} alt="" />
          <img className="mainRightImg" src={mainRightImg} alt="" />
          <section className="hero">
            <div className="hero-content">
              <div className="hero-text">
                <h1>
                  Experienced <span>mobile and web</span> applications and
                  website builders measuring.
                </h1>
                <p>
                  KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                  web applications and website builders measuring dozens of
                  completed projects. We build and develop mobile applications
                  for several top platforms, including Android & IOS.
                </p>
                <div className="hero-buttons">
                  <button className="btn-primary">Contact us</button>
                  <button className="btn-secondary">View more</button>
                </div>
              </div>
              <div className="hero-image">
                <div className="image-placeholder">
                  <img src={mainImg} alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="services">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon web-icon">
                <img className="services1" src={services1} alt="" />
              </div>
              <div className="textServices">
                <h3>Web Application</h3>
                <p>Lorem Ipsum is simply</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon seo-icon">
                <img className="services2" src={services2} alt="" />
              </div>
              <div className="textServices">
                <h3>SEO</h3>
                <p>Lorem Ipsum is simply</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon ar-icon">
                <img className="services3" src={services3} alt="" />
              </div>
              <div className="textServices">
                <h3>AR/VR Solutions</h3>
                <p>Lorem Ipsum is simply</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon mobile-icon">
                <img className="services4" src={services4} alt="" />
              </div>
              <div className="textServices">
                <h3>Mobile Applications</h3>
                <p>Lorem Ipsum is simply</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
