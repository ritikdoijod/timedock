import { FaPlay } from "react-icons/fa6";

import "./style.css";

export default function Page() {
  return (
    <div>
      <div className="active-task">
        <button className="play-pause-button">
          <FaPlay />
        </button>
        <div className="time">
          <time>02:02:15</time>
        </div>
        <div>
          Create List of Users
        </div>
        <div>
          <button>more details</button>
        </div>
      </div>
    </div>
  );
}
