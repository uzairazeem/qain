import React from "react";
import "./App.css";

import slide1 from "./img/slide1.png";
import Slide2 from "./img/slide2-1.png";
import Slide3 from "./img/slide3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";
function App() {
  return (
    <>
      <Navbar />

      <div className="App">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={slide1} class="d-block w-100" alt="Slide1" />
            </div>
            <div class="carousel-item">
              <img src={Slide2} class="d-block w-100" alt="Slide2" />
            </div>
            <div class="carousel-item">
              <img src={Slide3} class="d-block w-100" alt="SLide" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/* <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel/="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </>
  );
}

export default App;
