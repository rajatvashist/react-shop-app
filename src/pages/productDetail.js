import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function ProductDetail() {
  const [detail, setdetail] = useState({});
  let { pid } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${pid}`)
      .then((res) => res.json())
      .then((data) => setdetail(data));
  });

  console.log(detail);
  return (
    <>
      {/* Start Shop Detail  */}
      <div className="shop-detail-box-main">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div
                id="carousel-example-1"
                className="single-product-slider carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  {detail.images?.map((yt, i) => (
                    <>
                      <div
                        className={`carousel-item ${i === 0 ? "active" : ""}`}
                      >
                        {" "}
                        <img
                          className="d-block w-100"
                          src={yt}
                          alt="First slide"
                        />{" "}
                      </div>
                      <p>{yt}</p>
                    </>
                  ))}
                </div>
                <Link
                  className="carousel-control-prev"
                  to="#carousel-example-1"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </Link>
                <Link
                  className="carousel-control-next"
                  to="#carousel-example-1"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </Link>
                <ol className="carousel-indicators">
                  {detail.images?.map((yr, i) => (
                    <li
                      data-target="#carousel-example-1"
                      data-slide-to={i}
                      className="active"
                    >
                      <img
                        className="d-block w-100 img-fluid"
                        src={yr}
                        alt=""
                      />
                    </li>
                  ))}
                  {/* <li data-target="#carousel-example-1" data-slide-to={1}>
                <img
                  className="d-block w-100 img-fluid"
                  src="images/smp-img-02.jpg"
                  alt=""
                />
              </li>
              <li data-target="#carousel-example-1" data-slide-to={2}>
                <img
                  className="d-block w-100 img-fluid"
                  src="images/smp-img-03.jpg"
                  alt=""
                />
              </li> */}
                </ol>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6">
              <div className="single-product-details">
                <h2>{detail.title}</h2>
                <h5>
                  {" "}
                  <del>
                    $ {detail.price / (1 - detail.discountPercentage / 100)}
                  </del>{" "}
                  ${detail.price}
                  <p>Discount applied %{detail.discountPercentage}</p>
                </h5>
                <p className="available-stock">
                  <span>
                    {" "}
                    More than {detail.stock} available /{" "}
                    <Link to="#">8 sold </Link>
                  </span>
                </p>
                <p></p>
                <h4>Short Description:</h4>
                <p>{detail.description}</p>
                <ul>
                  <li>
                    <div className="form-group size-st">
                      <label className="size-label">Size</label>
                      <select
                        id="basic"
                        className="selectpicker show-tick form-control"
                      >
                        <option value={0}>Size</option>
                        <option value={0}>S</option>
                        <option value={1}>M</option>
                        <option value={1}>L</option>
                        <option value={1}>XL</option>
                        <option value={1}>XXL</option>
                        <option value={1}>3XL</option>
                        <option value={1}>4XL</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="form-group quantity-box">
                      <label className="control-label">Quantity</label>
                      <input
                        className="form-control"
                        defaultValue={0}
                        min={0}
                        max={20}
                        type="number"
                      />
                    </div>
                  </li>
                </ul>
                <div className="price-box-bar">
                  <div className="cart-and-bay-btn">
                    <Link
                      className="btn hvr-hover"
                      data-fancybox-close=""
                      to="#"
                    >
                      Buy New
                    </Link>
                    <Link
                      className="btn hvr-hover"
                      data-fancybox-close=""
                      to="#"
                    >
                      Add to cart
                    </Link>
                  </div>
                </div>
                <div className="add-to-btn">
                  <div className="add-comp">
                    <Link className="btn hvr-hover" to="#">
                      <i className="fas fa-heart" /> Add to wishlist
                    </Link>
                    <Link className="btn hvr-hover" to="#">
                      <i className="fas fa-sync-alt" /> Add to Compare
                    </Link>
                  </div>
                  <div className="share-bar">
                    <Link className="btn hvr-hover" to="#">
                      <i className="fab fa-facebook" aria-hidden="true" />
                    </Link>
                    <Link className="btn hvr-hover" to="#">
                      <i className="fab fa-google-plus" aria-hidden="true" />
                    </Link>
                    <Link className="btn hvr-hover" to="#">
                      <i className="fab fa-twitter" aria-hidden="true" />
                    </Link>
                    <Link className="btn hvr-hover" to="#">
                      <i className="fab fa-pinterest-p" aria-hidden="true" />
                    </Link>
                    <Link className="btn hvr-hover" to="#">
                      <i className="fab fa-whatsapp" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
