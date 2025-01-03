import { SiStardock } from "react-icons/si";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { RiHome6Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { MdOutlineAutoGraph } from "react-icons/md";
import { MdOutlineGraphicEq } from "react-icons/md";

import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top-section">
        <div className="sidebar-logo">
          <SiStardock />
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <div className="icon">
              <RiHome6Line />
            </div>
            <span>Dashboard</span>
          </li>
          <li className="sidebar-item active">
            <div className="icon">
              <MdOutlineSpaceDashboard />
            </div>
            <span>Dashboard</span>
          </li>
          <li className="sidebar-item">
            <div className="icon">
              <FiSearch />
            </div>
            <span>Dashboard</span>
          </li>
          <li className="sidebar-item">
            <div className="icon">
              <MdOutlineAutoGraph />
            </div>
            <span>Dashboard</span>
          </li>
          <li className="sidebar-item">
            <div className="icon">
              <MdOutlineGraphicEq />
            </div>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="sidebar-bottom-section">
        <ul className="sidebar-bottom-menu">
          <li className="sidebar-item">
            <div className="icon">
              <IoMdSettings />
            </div>
            <span>Settings</span>
          </li>
          <li className="sidebar-item">
            <div className="icon">
              <CgProfile />
            </div>
            <span>Profile</span>
          </li>
          <li className="sidebar-item">
            <div className="icon">
              <AiOutlineLogout />
            </div>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
