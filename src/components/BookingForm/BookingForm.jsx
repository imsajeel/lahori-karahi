import React, { useState } from "react";

const BookingForm = () => {
  const [data, setData] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = () => {
    setMessage();
    if (!data.mobile || !data.name || !data.date) {
      setMessage({
        type: "ERROR",
        text: "Name, Mobile and Date are required!!!!",
      });
    } else {
      const currentDate = new Date();
      const submitedData = new Date(data.date);
      if (submitedData <= currentDate) {
        setMessage({
          type: "ERROR",
          text: "Booking date must be in future, For more info Call on number given above!",
        });
      } else {
        fetch("https://hooks.zapier.com/hooks/catch/22569015/2xm92oe/", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        setData();
        setMessage({
          type: "Success",
          text: "Booking request has been made successfully!!",
        });
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  return (
    <div className="booking-input">
      <h2>BOOK A TABLE</h2>
      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        name="mobile"
        type="tel"
        placeholder="Mobile Number"
        onChange={handleChange}
      />
      <input
        name="persons"
        type="number"
        placeholder="How Many Persons?"
        onChange={handleChange}
      />
      <input
        name="date"
        type="date"
        placeholder="Date"
        defaultValue="2025-05-18"
        onChange={handleChange}
      />
      <input
        name="time"
        type="time"
        placeholder="Time"
        defaultValue="12:00"
        min="12:00"
        max="23:30"
        onChange={handleChange}
      />
      {message && (
        <div
          style={{
            marginBottom: "1rem",
            textAlign: "left",
            color: message.type === "ERROR" ? "red" : "white",
          }}
        >
          {message.text}
        </div>
      )}
      <button className="secondary" onClick={handleSubmit}>
        Request Booking!
      </button>
    </div>
  );
};

export default BookingForm;
