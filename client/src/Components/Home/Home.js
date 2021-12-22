import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    if (response.status === 200) {
      setData(response.data);
    }
  };
  const deleteUser = async (id) => {
    if (window.confirm("Deleteing the user. Pls click ok to proceed")) {
      const response = await axios.delete(`http://localhost:5000/user/${id}`);
      if (response.status === 200) {
        toast.success(response.data);
        getUsers();
      }
    }
  };
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>No.</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Contact</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className={`${styles.btn} ${styles.edit}`}>
                      Edit
                    </button>
                  </Link>
                  <button
                    className={`${styles.btn} ${styles.delete}`}
                    onClick={() => deleteUser(item.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/view/${item.id}`}>
                    <button className={`${styles.btn} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
