import React, { useState, createContext } from "react";
import Users from "./dashboard/Users";
import Events from "./dashboard/Events";
import Bookings from "./dashboard/Bookings";
const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar">
      <h3
        className="sidebar-title"
        style={{ fontSize: "18px", marginBottom: "10px" }}
      >
        Menu
      </h3>
      <ul className="menu-list" style={{ listStyle: "none", padding: "0" }}>
        <li
          onClick={() => onSelect("events")}
          className="menu-item"
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #3f6d2c",
          }}
        >
          Events
        </li>
        <li
          onClick={() => onSelect("bookings")}
          className="menu-item"
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #3f6d2c",
          }}
        >
          Bookings
        </li>
      </ul>
    </div>
  );
};

const DashboardContent = ({ selected }) => {
  return (
    <div className="container">
      {selected === "events" && (
        <div>
          <Events />
        </div>
      )}
      {selected === "bookings" && (
        <div>
          <Bookings />
        </div>
      )}
    </div>
  );
};

const DashboardContext = createContext();

const Dashboard = () => {
  const [selected, setSelected] = useState("events");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onSelect={setSelected} />
      <DashboardContent selected={selected} />
    </div>
  );
};

export default Dashboard;
