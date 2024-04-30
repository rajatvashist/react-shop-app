import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [id, setid] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setid(data.Users));
  });
  return (
    <>
      <div class="all-title-box">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Shop</h2>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active">USERS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

   
                                








     
    </>
  );
}

export default Users;
