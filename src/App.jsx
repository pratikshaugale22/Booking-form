import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState(
    localStorage.getItem("name") || ""
  );

  const [source, setSource] = useState(
    localStorage.getItem("source") || ""
  );

  const [destination, setDestination] = useState(
    localStorage.getItem("destination") || ""
  );

  const [date, setDate] = useState(
    localStorage.getItem("date") || ""
  );

  const [seats, setSeats] = useState(
    localStorage.getItem("seats") || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("name", name);
    localStorage.setItem("source", source);
    localStorage.setItem("destination", destination);
    localStorage.setItem("date", date);
    localStorage.setItem("seats", seats);

    alert("Booking saved successfully!");
  };

  return (
    <div className="container">
      <div className="bookingform">
        <h1>Bus Booking Form</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
          >
            <option value="">Select Source</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Goa">Goa</option>
            <option value="Delhi">Delhi</option>
          </select>

          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="">Select your Destination</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Goa">Goa</option>
            <option value="Delhi">Delhi</option>
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            type="number"
            placeholder="Number of seats"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            min="1"
          />

          <button type="submit">Book Bus</button>
        </form>
      </div>
    </div>
  );
}

export default App;