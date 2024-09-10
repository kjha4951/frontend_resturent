import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(0);
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
  
    // Frontend validation for firstname and lastname
    if (firstname.length < 3 || firstname.length > 20) {
      toast.error("First name must contain between 3 and 20 characters.");
      return;
    }
    if (lastname.length < 3 || lastname.length > 20) {
      toast.error("Last name must contain between 3 and 20 characters.");
      return;
    }
  
    // Frontend validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }
  
    // Frontend validation for phone (assuming 10-digit phone numbers)
    if (phone.length !== 10) {
      toast.error("Phone number must contain exactly 10 digits.");
      return;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }
  
    // Validate other required fields (date and time)
    if (!date) {
      toast.error("Please select a date.");
      return;
    }
    if (!time) {
      toast.error("Please select a time.");
      return;
    }
  
    // If all validations pass, proceed with the API request
    console.log({ firstname, lastname, email, phone, time, date });
    try {
      const { status, data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { firstname, lastname, email, phone, time, date },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
  
      if (status === 400) {
        toast.error(data.errors[0].msg);
      } else {
        toast.success(data.message);
        // Reset form after successful submission
        setfirstname("");
        setlastname("");
        setPhone("");
        setEmail("");
        setTime("");
        setDate("");
        navigate("/success");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleReservation}>
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
