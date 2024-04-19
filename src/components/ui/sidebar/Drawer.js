import React from "react";
import "./Drawer.css";

// mui icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SettingsIcon from "@mui/icons-material/Settings";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

function Drawer() {
  return (
    <div className="SideDrawer">
      <div className="SideDrawer__body">
        <div className="SideDrawer__body__list">
          <div className="SideDrawer__body__item">
            <div className="nav_list">
              <DashboardIcon style={{ color: "white", fontSize: 20 }} />
              <a href="index.jsx">Dashboard</a>
            </div>
            <div className="nav_list">
              <AccountTreeIcon
                size={18}
                style={{ color: "white", fontSize: 20 }}
              />
              <a href="index.jsx">Projects</a>
            </div>
            <div className="nav_list">
              <SettingsIcon
                size={14}
                style={{ color: "white", fontSize: 20 }}
              />
              <a href="index.jsx">Settings</a>
            </div>
            <div className="nav_list">
              <HeadphonesIcon
                size={14}
                style={{ color: "white", fontSize: 20 }}
              />
              <a href="index.jsx">Support</a>
            </div>
            <div className="nav_list">
              <AssignmentTurnedInIcon
                size={14}
                style={{ color: "white", fontSize: 20 }}
              />
              <a href="index.jsx">Tasks</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
