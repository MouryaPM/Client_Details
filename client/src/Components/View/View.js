import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./View.module.css";
const View = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) getSingleUser(id);
  }, [id]);

  const getSingleUser = async () => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    //const response = await fetch(`http://localhost:5000/user/${id}`);
    // console.log("REPONSE::", response.json());
    if (response.status === 200) {
      setUser({
        ...response.data[0],
      });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles["card-header"]}>
          <p>User Details</p>
        </div>
        <div className={styles.details}>
          <strong>Id:</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span>{user && user.name}</span>
          <br />
          <br />
          <strong>Email</strong>
          <span>{user && user.email}</span>
          <br />
          <br />
          <strong>Contact</strong>
          <span>{user && user.contact}</span>
          <br />
          <br />
          <Link to="/">
            <button className={styles.edit}>Go To Home Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
