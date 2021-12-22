import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./AddEdit.module.css";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  contact: "",
};
const AddEdit = () => {
  const [userState, setUserState] = useState(initialState);
  const { name, email, contact } = userState;
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);
  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    if (response.status === 200) {
      setUserState({ ...response.data[0] });
    }
  };
  const inputChangeHandler = (event) => {
    let { name, value } = event.target;
    setUserState({ ...userState, [name]: value });
  };
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    if (!name || !email || !contact) {
      return toast.error("Please add all fileds");
    }
    if (!id) addContact(userState);
    else updateContact(userState, id);
    setTimeout(() => navigate("/"), 500);
  };
  const addContact = async (data) => {
    const response = await axios.post("http://localhost:5000/users", data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };
  const updateContact = async (data, id) => {
    const response = await axios.put(`http://localhost:5000/user/${id}`, data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles["form-control"]} onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="Enter Name"
          onChange={inputChangeHandler}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Enter Email"
          onChange={inputChangeHandler}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          name="contact"
          id="contact"
          value={contact}
          placeholder="Enter Contact"
          onChange={inputChangeHandler}
        />
        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddEdit;
