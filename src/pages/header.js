import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* Start Main Top */}
      <div className="main-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="text-slid-box">
                <div id="offer-box" className="carouselTicker">
                  <ul className="offer-box"></ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="custom-select-box">
                <select
                  id="basic"
                  className="selectpicker show-tick form-control"
                  data-placeholder="$ USD"
                >
                  <option>¥ JPY</option>
                  <option>$ USD</option>
                  <option>€ EUR</option>
                </select>
              </div>
              <div className="right-phone-box">
                <p>
                  Call US :- <Link to="#"> +11 900 800 100</Link>
                </p>
              </div>
              <div className="our-link">
                <ul>
                  <li>
                    <Link to="myaccounts">My Account</Link>
                  </li>

                  {/* <li>
                    <Link to="Users">Users</Link>
                  </li> */}
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Main Top */}
      {/* Start Main Top */}
      <header className="main-header">
        {/* Start Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
          <div className="container">
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars" />
              </button>
              <Link className="navbar-brand" to="/">
                <img src="images/logo.png" className="logo" alt="" />
              </Link>
            </div>
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav ml-auto"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="product/:pid">
                    Products
                  </Link>
                </li>
                <li className="dropdown megamenu-fw">
                  <Link
                    to="about"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    About
                  </Link>
                  <ul className="dropdown-menu megamenu-content" role="menu">
                    <li>
                      <div className="row">
                        <div className="col-menu col-md-3">
                          <h6 className="title">Top</h6>
                          <div className="content">
                            <ul className="menu-col">
                              <li>
                                <Link to="shop.html">Jackets</Link>
                              </li>
                              <li>
                                <Link to="shop.html">Shirts</Link>
                              </li>
                              <li>
                                <Link to="shop.html">
                                  Sweaters &amp; Cardigans
                                </Link>
                              </li>
                              <li>
                                <Link to="shop.html">T-shirts</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* end col-3 */}
                        <div className="col-menu col-md-3">
                          <h6 className="title">Bottom</h6>
                          <div className="content">
                            <ul className="menu-col">
                              <li>
                                <Link to="shop.html">Swimwear</Link>
                              </li>
                              <li>
                                <Link to="shop.html">Skirts</Link>
                              </li>
                              <li>
                                <Link to="shop.html">Jeans</Link>
                              </li>
                              <li>
                                <Link to="shop.html">Trousers</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* end col-3 */}
                        <div className="col-menu col-md-3">
                          <h6 className="title">Clothing</h6>
                          <div className="content">
                            <ul className="menu-col">
                              <li>
                                <Link to="shop.html">Top Wear</Link>
                              </li>
                              <li>
                                <Link to="shop.html">Party wear</Link>
                              </li>
                              <li>
                                <Link to="shop.html">Bottom Wear</Link>
                              </li>
                              <li>
                                <Link to="shop.html">Indian Wear</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-3">
                          <h6 className="title">Accessories</h6>
                          <div className="content">
                            <ul className="menu-col">
                              <li>
                                <Link to="shop.html">Bags</Link>
                              </li>
                              <li>
                                <Link to="shop.html">Sunglasses</Link>
                              </li>
                              <li>
                                <Link to="shop.html">Fragrances</Link>
                              </li>
                              <li>
                                <Link to="shop.html">Wallets</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* end col-3 */}
                      </div>
                      {/* end row */}
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="cart.html">Cart</Link>
                    </li>
                    <li>
                      <Link to="checkout.html">Checkout</Link>
                    </li>
                    <li>
                      <Link to="my-account.html">My Account</Link>
                    </li>
                    <li>
                      <Link to="wishlist.html">Wishlist</Link>
                    </li>
                    <li>
                      <Link to="shop-detail.html">Shop Detail</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="service">
                    Our Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
            {/* Start Atribute Navigation */}
            <div className="attr-nav">
              <ul>
                <li className="search">
                  <Link to="#">
                    <i className="fa fa-search" />
                  </Link>
                </li>
                <li className="side-menu">
                  <Link to="cart">
                    <i className="fa fa-shopping-bag" />
                    <span className="badge"></span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* End Atribute Navigation */}
          </div>
          {/* Start Side Menu */}
          <div className="side">
            <Link to="#" className="close-side">
              <i className="fa fa-times" />
            </Link>
            <li className="cart-box">
              <ul className="cart-list">
                <li>
                  <Link to="#" className="photo">
                    <img
                      src="images/img-pro-01.jpg"
                      className="cart-thumb"
                      alt=""
                    />
                  </Link>
                  <h6>
                    <Link to="#">Delica omtantur </Link>
                  </h6>
                  <p>
                    1x - <span className="price">$80.00</span>
                  </p>
                </li>
                <li>
                  <Link to="#" className="photo">
                    <img
                      src="images/img-pro-02.jpg"
                      className="cart-thumb"
                      alt=""
                    />
                  </Link>
                  <h6>
                    <Link to="#">Omnes ocurreret</Link>
                  </h6>
                  <p>
                    1x - <span className="price">$60.00</span>
                  </p>
                </li>
                <li>
                  <Link to="#" className="photo">
                    <img
                      src="images/img-pro-03.jpg"
                      className="cart-thumb"
                      alt=""
                    />
                  </Link>
                  <h6>
                    <Link to="#">Agam facilisis</Link>
                  </h6>
                  <p>
                    1x - <span className="price">$40.00</span>
                  </p>
                </li>
                <li className="total">
                  <Link to="#" className="btn btn-default hvr-hover btn-cart">
                    VIEW CART
                  </Link>
                  <span className="float-right">
                    <strong>Total</strong>: $180.00
                  </span>
                </li>
              </ul>
            </li>
          </div>
          {/* End Side Menu */}
        </nav>
        {/* End Navigation */}
      </header>
      {/* End Main Top */}

      {/* Start Top Search */}
      <div className="top-search">
        <div className="container">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-search" />
            </span>
            <input type="text" className="form-control" placeholder="Search" />
            <span className="input-group-addon close-search">
              <i className="fa fa-times" />
            </span>
          </div>
        </div>
      </div>
      {/* End Top Search */}
    </>
  );
}

export default Header;
