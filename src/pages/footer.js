import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Start Footer  */}
      <footer>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-widget">
                  <h4>About ThewayShop</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook" aria-hidden="true" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" aria-hidden="true" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin" aria-hidden="true" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-google-plus" aria-hidden="true" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-rss" aria-hidden="true" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-pinterest-p" aria-hidden="true" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-whatsapp" aria-hidden="true" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link">
                  <h4>Information</h4>
                  <ul>
                    <li>
                      <Link to="#">About Us</Link>
                    </li>
                    <li>
                      <Link to="#">Customer Service</Link>
                    </li>
                    <li>
                      <Link to="#">Our Sitemap</Link>
                    </li>
                    <li>
                      <Link to="#">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Delivery Information</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link-contact">
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <p>
                        <i className="fas fa-map-marker-alt" />
                        Address: Michael I. Days 3756 <br />
                        Preston Street Wichita,
                        <br /> KS 67213{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-phone-square" />
                        Phone: <Link to="tel:+1-888705770">+1-888 705 770</Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-envelope" />
                        Email:{" "}
                        <Link to="mailto:contactinfo@gmail.com">
                          contactinfo@gmail.com
                        </Link>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer  */}

      <>
  {/* Start Instagram Feed  */}
  <div className="instagram-box">
    <div className="main-instagram owl-carousel owl-theme">
      <div className="item">
        <div className="ins-inner-box">
          <img src="images/instagram-img-01.jpg" alt="" />
          <div className="hov-in">
            <Link to="#">
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="ins-inner-box">
          <img src="images/instagram-img-02.jpg" alt="" />
          <div className="hov-in">
            <Link to="#">
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="ins-inner-box">
          <img src="images/instagram-img-03.jpg" alt="" />
          <div className="hov-in">
            <Link to="#">
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="ins-inner-box">
          <img src="images/instagram-img-04.jpg" alt="" />
          <div className="hov-in">
            <Link to="#">
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="ins-inner-box">
          <img src="images/instagram-img-05.jpg" alt="" />
          <div className="hov-in">
            <Link to="#">
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="ins-inner-box">
          <img src="images/instagram-img-06.jpg" alt="" />
          <div className="hov-in">
            <Link to="#">
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="ins-inner-box">
          <img src="images/instagram-img-07.jpg" alt="" />
          <div className="hov-in">
            <Link to="#">
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="ins-inner-box">
          <img src="images/instagram-img-08.jpg" alt="" />
          <div className="hov-in">
            <Link to="#">
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="ins-inner-box">
          <img src="images/instagram-img-09.jpg" alt="" />
          <div className="hov-in">
            <Link to="#">
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="ins-inner-box">
          <img src="images/instagram-img-05.jpg" alt="" />
          <div className="hov-in">
            <Link to="#">
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Instagram Feed  */}
</>


    
        {/* Start copyright  */}
        <div className="footer-copyright">
          <p className="footer-company">
            All Rights Reserved. © 2018 <Link to="#">ThewayShop</Link> Design By :
            <Link to="#"> Rajat</Link>
          </p>
        </div>
        {/* End copyright  */}
        <Link
          to="#"
          id="back-to-top"
          title="Back to top"
          style={{ display: "none" }}
        >
          ↑
        </Link>
    
    </>
  );
}

export default Footer;
