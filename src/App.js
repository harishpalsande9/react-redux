import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addBird, incrementBird } from "./store/birds/birds";
import { useState } from "react";

function App() {
  const [birdName, setBird] = useState("");

  // const birds = useSelector((state) => state.birds);
  const birds = [...useSelector((state) => state.birds)].sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBird(birdName));
    setBird("");
  };

  return (
    <div className="wrapper">
      <h1>Bird List</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <p>Add Bird</p>
          <input
            type="text"
            onChange={(e) => setBird(e.target.value)}
            value={birdName}
          />
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
        {birds.map((bird) => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>
              Views: {bird.views}
              <button onClick={() => dispatch(incrementBird(bird.name))}>
                <span role="img" aria-label="add">
                  ➕
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
