"use client";

import * as React from "react";
import axios from "axios";
import "./App.css"; // Import a CSS file for styling

export default function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://randomuser.me/api")
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <button className="fetch-button" onClick={fetchData}>
        Fetch Data
      </button>
      {data.map((item, index) => (
        <div className="user-card" key={index}>
          <div className="user-details">
            <p>
              <strong>
                {item.name.title} {item.name.first} {item.name.last}
              </strong>
            </p>
            <ul>
              <li>Age: {item.dob.age}</li>
              <li>Gender: {item.gender}</li>
              <li>
                Location: {item.location.city}, {item.location.state},{" "}
                {item.location.country}
              </li>
              <li>Email: {item.email}</li>
              <li>Phone: {item.phone}</li>
              <li>ID: {item.id.value}</li>
              <li>NAT: {item.nat}</li>
              <li>Cell: {item.cell}</li>
              <li>Username: {item.login.username}</li>
              <li>Password: {item.login.password}</li>
              <li>Registered Date: {item.registered.date}</li>
            </ul>
          </div>
          <img className="user-image" src={item.picture.large} alt="User" />
        </div>
      ))}
    </div>
  );
}
