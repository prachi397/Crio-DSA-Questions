import React, { useState } from "react";
import axios from "axios";

const BookAppointment = () => {
  const [doctor, setDoctor] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("");
  const [loading, setLoading] = useState(false);
  const [appointment, setAppointment] = useState(false);

  function handleDoctorChange(e) {
    setDoctor(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const url = "https://jsonplaceholder.typicode.com/posts";
    const formData = {
      firstName,
      lastName,
      email,
      where,
      when,
    };
    try {
      setLoading(true);
      const resp = await axios.post(url, formData);
      if (resp.status === 201) {
        setLoading(false);
        setAppointment(true);
      }
    } catch (err) {
      console.log("Error in sending data");
    }
  }

  function handleAppointmentCancel() {
    setAppointment(false);
  }

  return (
    <div>
      <h1>Book a session</h1>
      <p>Fill in the form below to book a virtual session with your doctor</p>
      {loading ? (
        <h2>Scheduling the appointment...</h2>
      ) : appointment ? (
        <>
          <h2>Appointment booked sucessfully</h2>
          <button onClick={handleAppointmentCancel}>Cancel Appointment</button>
        </>
      ) : (
        <>
          <h3>Basic Info</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label for="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label for="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div>
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <h3>Doctor</h3>
              <select onChange={handleDoctorChange} value={doctor} required>
                <option value="">Select your doctor</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Johnson">Dr. Johnson</option>
              </select>
            </div>
            {doctor && (
              <>
                <div>
                  <h3>Where?</h3>
                  <input
                    type="radio"
                    id="googleMeet"
                    name={where}
                    value="Google Meet"
                    checked={where === "Google Meet"}
                    onChange={(e) => setWhere(e.target.value)}
                  />
                  <label for="html">Google Meet</label>
                  <br />
                  <input
                    type="radio"
                    id="phone"
                    name="where"
                    value="Phone"
                    checked={where === "Phone"}
                    onChange={(e) => setWhere(e.target.value)}
                  />
                  <label for="phone">Phone</label>
                </div>
                <div>
                  <h3>when?</h3>
                  <input
                    type="date"
                    value={when}
                    onChange={(e) => setWhen(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            <button type="submit">Confirm Booking</button>
          </form>
        </>
      )}
    </div>
  );
};
export default BookAppointment;