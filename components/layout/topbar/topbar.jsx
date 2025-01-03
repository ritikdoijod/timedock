import { FiSearch } from "react-icons/fi";
import { FaMicrophoneAlt } from "react-icons/fa";

import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="search">
        <input type="text" className="search-input" placeholder="Quickly search here..." />
        <div className="search-icon">
          <FiSearch />
        </div>
        <div className="mic-icon">
          <FaMicrophoneAlt />
        </div>
      </div>
    </div>
  )
}
