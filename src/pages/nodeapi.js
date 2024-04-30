import { useState, useEffect } from "react";

function NodeApi() {
  const [ab, setab] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2004/adminapi")
      .then((res) => res.json())
      .then((data) => setab(data));
  }, []);
  return (
    <>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {ab.map((h) => (
            <tr>
              <td>{h.username}</td>
              <td>{h.password}</td>
              <td>{h.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default NodeApi;
