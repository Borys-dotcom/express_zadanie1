import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./UsersList.css"


const UsersList = () => {
  const [usersList, setUsersList] = useState([]);

  const initialRead = () => {
    axios
      .get("http://localhost:5678/api/users")
      .then((response) => {
        setUsersList(() => {
          return response.data;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(initialRead, []);

  return (
    <div className="container">
      <div className="card mb-3">
        <h2>Users List</h2>
      </div>
      {usersList.map((user, index) => {
        return (
          <div className="card mb-3" key={index}>
            <h3 className="card-title">{user.name}</h3>
            <h4 className="card-text">Adres:</h4>
            <p className="card-text">Ulica: {user.address.street}</p>
            <p className="card-text">Mieszkanie: {user.address.suite}</p>
            <p className="card-text">Miasto: {user.address.city}</p>
            <p className="card-text">Kod pocztowy: {user.address.zipcode}</p>
            <p className="card-text">
              Lokalizacja: {user.address.geo.lat}, {user.address.geo.lng}
            </p>
            <a href="http://www.{{website}}">www.{user.website}</a>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
