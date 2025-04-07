import React, { useState, createContext } from "react";
import Users from "./dashboard/Users";
import Events from "./dashboard/Events";
import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
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
          onClick={() => onSelect("users")}
          className="menu-item"
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #3f6d2c",
          }}
        >
          Users
        </li>
        {/* <li
          onClick={() => onSelect("users")}
          className="menu-item"
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #3f6d2c",
          }}
        >
          Opinion Editorials
        </li>
        <li
          onClick={() => onSelect("users")}
          className="menu-item"
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #3f6d2c",
          }}
        >
          Waste Reports
        </li> */}
      </ul>
    </div>
  );
};

const DashboardContent = ({ selected }) => {
  return (
    <div className="container-fluid">
      {selected === "events" && <Events />}
      {selected === "users" && <Users />}
    </div>
  );
};

const Dashboard = () => {
  const getCurrentUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      if (!token || !user || token !== user.loginToken) {
        window.location.href = "/";
        return;
      }
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };

  const [selected, setSelected] = useState("events");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  React.useEffect(() => {
    getCurrentUser();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div>
          <div
            className="tabs"
            style={{
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "1px solid #3f6d2c",
            }}
          >
            <button
              onClick={() => setSelected("events")}
              style={{
                padding: "10px",
                cursor: "pointer",
                background: "none",
                border: "none",
              }}
            >
              Events
            </button>
            <button
              onClick={() => setSelected("users")}
              style={{
                padding: "10px",
                cursor: "pointer",
                background: "none",
                border: "none",
              }}
            >
              Users
            </button>
            {/* <button
              onClick={() => setSelected("users")}
              style={{
                padding: "10px",
                cursor: "pointer",
                background: "none",
                border: "none",
              }}
            >
              Opinion Editorials
            </button>
            <button
              onClick={() => setSelected("users")}
              style={{
                padding: "10px",
                cursor: "pointer",
                background: "none",
                border: "none",
              }}
            >
              Waste Reports
            </button> */}
          </div>
          <DashboardContent selected={selected} />
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <Sidebar onSelect={setSelected} />
          <DashboardContent selected={selected} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
