import { useState } from "react";
import Lo from "./Lon";

function Login() {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [errors, setError] = useState("");
  const [ids, setsid] = useState({});
  const logIn = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user,
        password: pass,
        expiresInMins: 0.1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if ("message" in data) {
          setError("Username and Password incorrect!");
        } else {
          setsid(data);
          localStorage.setItem("login", JSON.stringify(data));
          window.location.to = "/accounts";
        }
      });
  };
  let l = Object.keys(ids).length;
  if (l > 0) {
    localStorage.setItem("ids", JSON.stringify(ids.id));
  }
  return (
    <>
      <div className="col-lg-8 col-sm-12">
        <div className="contact-form-right">
          <h2>Login</h2>
          <p>{errors}</p>
          <form id="contactForm" onSubmit={logIn}>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="username"
                    placeholder="Your username"
                    required=""
                    data-error="Please enter your username"
                    onChange={(e) => setuser(e.target.value)}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Your password"
                    id="email"
                    className="form-control"
                    name="name"
                    required=""
                    onChange={(e) => setpass(e.target.value)}
                    data-error="Please enter your password"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>

              <div className="submit-button text-center">
                <button className="btn hvr-hover" id="submit" type="submit">
                  Login
                </button>
                <div id="msgSubmit" className="h3 text-center hidden" />
                <div className="clearfix" />
              </div>
            </div>
          </form>
        </div>
      </div>

      <Lo />
    </>
  );
}

export default Login;
