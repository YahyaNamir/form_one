import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    country: "Morocco",
    gender: "",
    agree: false,
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const showData = () => {
    setMessage(
      <p>
        Your name is : <b>{form.name}</b>
        <br />
        Your email is : <b>{form.email}</b>
        <br />
        Your Birth day is : <b>{form.date}</b>
        <br />
        Your country is : <b>{form.country}</b>
        <br />
        Your gender is : <b>{form.gender}</b>
        <br />
        Your statement is : <b>{form.agree ? "Agree" : "Disagree"}</b>
      </p>
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form.agree);
    if (
      form.name !== "" &&
      form.email !== "" &&
      form.date !== "" &&
      form.country !== "" &&
      form.gender !== ""
    ) {
      showData();
    } else {
      alert("Enter all data !!");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <label>Name :</label>
          <input
            name="name"
            value={form.name}
            type="text"
            onChange={handleChange}
          />
          <hr />
          <label>Email :</label>
          <input
            name="email"
            value={form.email}
            type="email"
            onChange={handleChange}
          />
          <hr />
          <label>Date :</label>
          <input
            name="date"
            value={form.date}
            type="date"
            onChange={handleChange}
          />
          <hr />
          <label>Country :</label>
          <select name="country" value={form.country} onChange={handleChange}>
            <option value="Morocco">Morocco</option>
            <option value="Argentina">Argentina</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
          </select>
          <hr />
          <label>Gender :</label>
          Male :{" "}
          <input
            type="radio"
            onChange={handleChange}
            name="gender"
            value="Male"
          />
          Female :{" "}
          <input
            type="radio"
            onChange={handleChange}
            name="gender"
            value="Female"
          />
          <hr />
          <label>Agree :</label>
          <input
            type="checkbox"
            onChange={handleChange}
            name="agree"
            value={form.agree}
          />
          <br />
          <button> Submit</button>
        </form>
        <>{message}</>
      </header>
    </div>
  );
}

export default App;
