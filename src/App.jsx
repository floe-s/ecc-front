/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
/* import "./App.css"; */
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  /* const [count, setCount] = useState(0); */
  /* const title = "Español com Carol"; */
  /* const likes = 50;
  const link = "https://google.com"; */

  return (
    <>
      <Navbar />
      <div className="content">
        
        <Home />
      </div>
    </>
  );
}

export default App;

{/* 
<p>Liked {likes} times </p>
        <a href={link}> Google </a>
        <h1>{title}</h1>


<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}