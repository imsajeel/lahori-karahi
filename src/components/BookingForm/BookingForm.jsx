import React, { useState } from "react";

const BookingForm = () => {
  const [data, setData] = useState({
    name: "",
    mobile: "",
    date: "",
  });
  const [message, setMessage] = useState();

  const validateForm = (formData) => {
    if (!formData) {
      setMessage({
        type: "ERROR",
        text: "Name must required for booking!!!",
      });
      return 0;
    }
    if (!formData.name) {
      setMessage({
        type: "ERROR",
        text: "Name must required for booking!!!",
      });
      return 0;
    }
    if (!formData.mobile) {
      setMessage({
        type: "ERROR",
        text: "Mobile must required for booking!!!",
      });
      return 0;
    }
    if (!formData.date) {
      setMessage({
        type: "ERROR",
        text: "Date must required for booking!!!",
      });

      return 0;
    }

    const currentDate = new Date();
    const submitedData = new Date(formData.date);
    if (submitedData <= currentDate) {
      setMessage({
        type: "ERROR",
        text: "Booking date must be in future, For more info Call on number given above!",
      });
      return 0;
    }

    return formData;
  };
  const handleSubmit = async () => {
    setMessage();

    const validatedData = validateForm(data);

    if (validatedData !== 0) {
      const fetchedData = await fetch(process.env.REACT_APP_ZAP, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if ((fetchedData.status = 200)) {
        console.log(fetchedData);
        setData();
        setMessage({
          type: "Success",
          text: "Booking request has been made successfully!!",
        });
      }
    } else {
      console.log("something went wrong during submision!!");
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
      <button
        className="secondary"
        onClick={() => {
          handleSubmit();
          // setMessage({
          //   type: "ERROR",
          //   text: "Something went wrong!! For more info or booking call on number given above!",
          // });
        }}
      >
        Request Booking!
      </button>
    </div>
  );
};

export default BookingForm;
