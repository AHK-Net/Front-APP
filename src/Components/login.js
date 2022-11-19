import React from "react";
import axios from "axios";
function Login() {
  const [name, setName] = React.useState("");
  axios
    .get("http://127.0.0.1:3000/user", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    })
    .then((response) => {
      setName(response.data);
    });
  return (
    <div>
      <h1>Login page</h1>
      <h1>{name}</h1>
    </div>
  );
}

export default Login;
