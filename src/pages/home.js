import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Start All Title Box */}
      <div className="all-title-box">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
      {/* End All Title Box */}
      {/* Start Categories  */}
      <div className="categories-shop">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="shop-cat-box">
                <img
                  className="img-fluid"
                  src="images/t-shirts-img.jpg"
                  alt=""
                />
                <Link className="btn hvr-hover" to="#">
                  T-shirts
                </Link>
              </div>
              <div className="shop-cat-box">
                <img className="img-fluid" src="images/shirt-img.jpg" alt="" />
                <Link className="btn hvr-hover" to="#">
                  Shirt
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="shop-cat-box">
                <img className="img-fluid" src="images/wallet-img.jpg" alt="" />
                <Link className="btn hvr-hover" to="#">
                  Wallet
                </Link>
              </div>
              <div className="shop-cat-box">
                <img
                  className="img-fluid"
                  src="images/women-bag-img.jpg"
                  alt=""
                />
                <Link className="btn hvr-hover" to="#">
                  Bags
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="shop-cat-box">
                <img className="img-fluid" src="images/shoes-img.jpg" alt="" />
                <Link className="btn hvr-hover" to="#">
                  Shoes
                </Link>
              </div>
              <div className="shop-cat-box">
                <img
                  className="img-fluid"
                  src="images/women-shoes-img.jpg"
                  alt=""
                />
                <Link className="btn hvr-hover" to="#">
                  Women Shoes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Categories */}
      {/* Start Products  */}
      <div className="products-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-all text-center">
                <h1>Featured Products</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet lacus enim.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="special-menu text-center">
                <div className="button-group filter-button-group">
                  <button className="active" data-filter="*">
                    All
                  </button>
                  <button data-filter=".top-featured">Top featured</button>
                  <button data-filter=".best-seller">Best seller</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row special-list">
            <div className="col-lg-3 col-md-6 special-grid best-seller">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <div className="type-lb">
                    <p className="sale">Sale</p>
                  </div>
                  <img
                    src="images/img-pro-01.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="mask-icon">
                    <ul>
                      <li>
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="View"
                        >
                          <i className="fas fa-eye" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Compare"
                        >
                          <i className="fas fa-sync-alt" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Add to Wishlist"
                        >
                          <i className="far fa-heart" />
                        </Link>
                      </li>
                    </ul>
                    <Link className="cart" to="#">
                      Add to Cart
                    </Link>
                  </div>
                </div>
                <div className="why-text">
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <h5> $7.79</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 special-grid top-featured">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <div className="type-lb">
                    <p className="new">New</p>
                  </div>
                  <img
                    src="images/img-pro-02.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="mask-icon">
                    <ul>
                      <li>
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="View"
                        >
                          <i className="fas fa-eye" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Compare"
                        >
                          <i className="fas fa-sync-alt" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Add to Wishlist"
                        >
                          <i className="far fa-heart" />
                        </Link>
                      </li>
                    </ul>
                    <Link className="cart" to="#">
                      Add to Cart
                    </Link>
                  </div>
                </div>
                <div className="why-text">
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <h5> $9.79</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 special-grid top-featured">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <div className="type-lb">
                    <p className="sale">Sale</p>
                  </div>
                  <img
                    src="images/img-pro-03.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="mask-icon">
                    <ul>
                      <li>
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="View"
                        >
                          <i className="fas fa-eye" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Compare"
                        >
                          <i className="fas fa-sync-alt" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Add to Wishlist"
                        >
                          <i className="far fa-heart" />
                        </Link>
                      </li>
                    </ul>
                    <Link className="cart" to="#">
                      Add to Cart
                    </Link>
                  </div>
                </div>
                <div className="why-text">
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <h5> $10.79</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 special-grid best-seller">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <div className="type-lb">
                    <p className="sale">Sale</p>
                  </div>
                  <img
                    src="images/img-pro-04.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="mask-icon">
                    <ul>
                      <li>
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="View"
                        >
                          <i className="fas fa-eye" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Compare"
                        >
                          <i className="fas fa-sync-alt" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Add to Wishlist"
                        >
                          <i className="far fa-heart" />
                        </Link>
                      </li>
                    </ul>
                    <Link className="cart" to="#">
                      Add to Cart
                    </Link>
                  </div>
                </div>
                <div className="why-text">
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <h5> $15.79</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Products  */}
      {/* Start Blog  */}
      <div className="latest-blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-all text-center">
                <h1>latest blog</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet lacus enim.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="blog-box">
                <div className="blog-img">
                  <img className="img-fluid" src="images/blog-img.jpg" alt="" />
                </div>
                <div className="blog-content">
                  <div className="title-blog">
                    <h3>Fusce in augue non nisi fringilla</h3>
                    <p>
                      Nulla ut urna egestas, porta libero id, suscipit orci.
                      Quisque in lectus sit amet urna dignissim feugiat. Mauris
                      molestie egestas pharetra. Ut finibus cursus nunc sed
                      mollis. Praesent laoreet lacinia elit id lobortis.
                    </p>
                  </div>
                  <ul className="option-blog">
                    <li>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Likes"
                      >
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Views"
                      >
                        <i className="fas fa-eye" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Comments"
                      >
                        <i className="far fa-comments" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="blog-box">
                <div className="blog-img">
                  <img
                    className="img-fluid"
                    src="images/blog-img-01.jpg"
                    alt=""
                  />
                </div>
                <div className="blog-content">
                  <div className="title-blog">
                    <h3>Fusce in augue non nisi fringilla</h3>
                    <p>
                      Nulla ut urna egestas, porta libero id, suscipit orci.
                      Quisque in lectus sit amet urna dignissim feugiat. Mauris
                      molestie egestas pharetra. Ut finibus cursus nunc sed
                      mollis. Praesent laoreet lacinia elit id lobortis.
                    </p>
                  </div>
                  <ul className="option-blog">
                    <li>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Likes"
                      >
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Views"
                      >
                        <i className="fas fa-eye" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Comments"
                      >
                        <i className="far fa-comments" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="blog-box">
                <div className="blog-img">
                  <img
                    className="img-fluid"
                    src="images/blog-img-02.jpg"
                    alt=""
                  />
                </div>
                <div className="blog-content">
                  <div className="title-blog">
                    <h3>Fusce in augue non nisi fringilla</h3>
                    <p>
                      Nulla ut urna egestas, porta libero id, suscipit orci.
                      Quisque in lectus sit amet urna dignissim feugiat. Mauris
                      molestie egestas pharetra. Ut finibus cursus nunc sed
                      mollis. Praesent laoreet lacinia elit id lobortis.
                    </p>
                  </div>
                  <ul className="option-blog">
                    <li>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Likes"
                      >
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Views"
                      >
                        <i className="fas fa-eye" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Comments"
                      >
                        <i className="far fa-comments" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog  */}
    </>
  );
}

export default Home;
