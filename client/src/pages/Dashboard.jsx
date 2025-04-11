import React, { useState, createContext } from "react";
import Users from "./dashboard/Users";
import Events from "./dashboard/Events";
import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Calendar from "../components/dashboard/Calendar";
import Solutions from "./dashboard/Solutions";
const Sidebar = ({ onSelect }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="sidebar">
      <h3
        className="sidebar-title text-white"
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

        {user?.role === "admin" && (
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
        )}

        <li
          onClick={() => onSelect("calendar")}
          className="menu-item"
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #3f6d2c",
          }}
        >
          Events Calendar
        </li>

        {user?.role === "admin" && (
          <li
            onClick={() => onSelect("solution")}
            className="menu-item"
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #3f6d2c",
            }}
          >
            Partners
          </li>
        )}
      </ul>
    </div>
  );
};

const DashboardContent = ({ selected }) => {
  return (
    <div className="container-fluid">
      {selected === "events" && <Events />}
      {selected === "users" && <Users />}
      {selected === "calendar" && <Calendar />}
      {selected === "solution" && <Solutions />}
    </div>
  );
};

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const getCurrentUser = async () => {
    try {
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

            {user?.role === "admin" && (
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
            )}
            <button
              onClick={() => setSelected("calendar")}
              style={{
                padding: "10px",
                cursor: "pointer",
                background: "none",
                border: "none",
              }}
            >
              Event Calendar
            </button>

            {user?.role === "admin" && (
              <button
                onClick={() => setSelected("solution")}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                }}
              >
                Partners
              </button>
            )}
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
