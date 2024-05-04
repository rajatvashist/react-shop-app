import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Myaccounts() {
  let login = useNavigate();
  let tok = "";
  const [, setda] = useState([]);
  const [p, setp] = useState([]);
  if (
    localStorage.getItem("login") !== null &&
    localStorage.getItem("login") !== undefined
  ) {
    let t = JSON.parse(localStorage.getItem("login"));
    tok = t.token;
  }
  let f = 0;
  if (
    localStorage.getItem("ids") !== null &&
    localStorage.getItem("ids") !== undefined
  ) {
    f = JSON.parse(localStorage.getItem("ids"));
  }
  useEffect(() => {
    if (tok === "") {
      alert("Please Login you Id");
      login("/login");
    } else if (tok) {
      try {
        fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `${tok}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setda(data));
      } catch (error) {
        console.log("Error");
      }
    }

    try {
      if (f > 0) {
        fetch(`https://dummyjson.com/carts/user/${f}`)
          .then((res) => res.json())
          .then((data) => {
            setp(data.carts[0].products);
          });
      }
    } catch (error) {
      alert("Error");
    }
  }, [f, login, tok]);
  if (p.length > 0) {
    localStorage.setItem("size", JSON.stringify(p.length));
  }
  return (
    <>
      <div className="my-account-box-main">
        <div className="container">
          <div className="my-account-page">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="account-box">
                  <div className="service-box">
                    <div className="service-icon">
                      <Link to="#">
                        {" "}
                        <i className="fa fa-gift" />{" "}
                      </Link>
                    </div>
                    <div className="service-desc">
                      <h4>Your Orders</h4>
                      <p>Track, return, or buy things again</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="account-box">
                  <div className="service-box">
                    <div className="service-icon">
                      <Link to="#">
                        <i className="fa fa-lock" />{" "}
                      </Link>
                    </div>
                    <div className="service-desc">
                      <h4>Login &amp; security</h4>
                      <p>Edit login, name, and mobile number</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="account-box">
                  <div className="service-box">
                    <div className="service-icon">
                      <Link to="#">
                        {" "}
                        <i className="fa fa-location-arrow" />{" "}
                      </Link>
                    </div>
                    <div className="service-desc">
                      <h4>Your Addresses</h4>
                      <p>Edit addresses for orders and gifts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="account-box">
                  <div className="service-box">
                    <div className="service-icon">
                      <Link to="#">
                        {" "}
                        <i className="fa fa-credit-card" />{" "}
                      </Link>
                    </div>
                    <div className="service-desc">
                      <h4>Payment options</h4>
                      <p>Edit or add payment methods</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="account-box">
                  <div className="service-box">
                    <div className="service-icon">
                      <Link to="#">
                        {" "}
                        <i className="fab fa-paypal" />{" "}
                      </Link>
                    </div>
                    <div className="service-desc">
                      <h4>PayPal</h4>
                      <p>View benefits and payment settings</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="account-box">
                  <div className="service-box">
                    <div className="service-icon">
                      <Link to="#">
                        {" "}
                        <i className="fab fa-amazon" />{" "}
                      </Link>
                    </div>
                    <div className="service-desc">
                      <h4>Amazon Pay balance</h4>
                      <p>Add money to your balance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-box">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="account-box">
                    <div className="service-box">
                      <div className="service-desc">
                        <h4>Gold &amp; Diamond Jewellery</h4>
                        <ul>
                          <li>
                            {" "}
                            <Link to="#">Apps and more</Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="#">Content and devices</Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="#">Music settings</Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="account-box">
                    <div className="service-box">
                      <div className="service-desc">
                        <h4>Handloom &amp; Handicraft Store</h4>
                        <ul>
                          <li>
                            {" "}
                            <Link to="#">Advertising preferences </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="#">Communication preferences</Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="#">SMS alert preferences</Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="#">Message center</Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="account-box">
                    <div className="service-box">
                      <div className="service-desc">
                        <h4>The Designer Boutique</h4>
                        <ul>
                          <li>
                            {" "}
                            <Link to="#">Amazon Pay</Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="#">Bank accounts for refunds</Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="#">Coupons</Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="account-box">
                    <div className="service-box">
                      <div className="service-desc">
                        <h4>Gift Boxes, Gift Tags, Greeting Cards</h4>
                        <ul>
                          <li>
                            {" "}
                            <Link to="#">Leave delivery feedback</Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="#">Lists</Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="#">Photo ID proofs</Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="#">Profile</Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="account-box">
                    <div className="service-box">
                      <div className="service-desc">
                        <h4>Other accounts</h4>
                        <ul>
                          <li>
                            {" "}
                            <Link to="#">
                              Amazon Business registration
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="#">Seller account</Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="#">Amazon Web Services</Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="#">Login with Amazon</Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="account-box">
                    <div className="service-box">
                      <div className="service-desc">
                        <h4>Shopping programs and rentals</h4>
                        <ul>
                          <li>
                            {" "}
                            <Link to="#">Subscribe &amp; Save</Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default Myaccounts;
