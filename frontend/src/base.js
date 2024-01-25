//base.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import myImage from "../images/3.jpg";

let div = {
  background: `url(${myImage})`,
  backgroundSize: "cover",
};

let flexcolumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

let flexrow = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

let box = {
  height: "92vh",
  marginTop: "9vh",
  paddingTop: "10vh",
};

let nav = {
  backgroundColor: "rgba(96,255,255, 0.7)",
  width: "45vw",
  borderRadius: "30px",
  height: "58px",
};

let navb = {
  border: "none",
  backgroundColor: "transparent",
  color: "black",
};

let subtitle = {
  textAlign: "center",
  color: "white",
  fontSize: "1.25rem",
  fontFamily: Montserrat,
};

export default function Base() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ width: "99vw" }}>
      <header
        className="fixed-navbar"
        style={{
          position: "fixed",
          ...flexrow,
          width: "99vw",
          height: "8.5vh",
          marginTop: "10px",
        }}
      >
        <nav style={{ ...nav, ...flexrow, gap: "2.5rem" }}>
          <button
            style={{ ...navb }}
            onClick={() => scrollToSection("section1")}
          >
            Introduction
          </button>
          <button
            style={{ ...navb }}
            onClick={() => scrollToSection("section2")}
          >
            Consumer
          </button>
          <button
            style={{ ...navb }}
            onClick={() => scrollToSection("section3")}
          >
            Prosumer
          </button>
          <button
            style={{ ...navb }}
            onClick={() => scrollToSection("section4")}
          >
            Producer
          </button>
          <button
            style={{ ...navb }}
            onClick={() => scrollToSection("section5")}
          >
            Contact Us
          </button>
        </nav>
      </header>
      <div
        style={{ height: "100vh", width: "99vw", ...div, paddingTop: "20vh" }}
      >
        <h1
          style={{
            // textAlign: "center",
            padding: "10vh 0 10vh 15vw",
            fontSize: "8rem",
            fontWeight: "bold",
            fontFamily: "Mukta",
            margin: "0",
            color: "white",
            display: "block",
            float: "left",
          }}
        >
          Company
        </h1>
        <div style={{ float: "right", padding: "20vh 15vw 0 0" }}>
          <p style={{ ...subtitle, color: "#02ffff" }}>Description</p>
          <p style={{ ...subtitle }}>cfvgbhnjmkrftgyhuj ftgybhnjmrftgyh </p>
          <p style={{ ...subtitle }}>ftybnj vgbhnjmk bhnjmk bhnjmk </p>
          <p style={{ ...subtitle }}>ftybnj vgbhnjmk bhnjmk bhnjmk </p>
          <p style={{ ...subtitle }}>ftybnj vgbhnjmk bhnjmk bhnjmk </p>
        </div>
      </div>
      <section id="section1">
        <div style={{ ...box }}>
          <h1
            style={{
              fontSize: "60px",
              color: "#001111",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Leading the Way in Microgrid Testing
          </h1>
          <div>content</div>
        </div>
      </section>
      <section id="section2">
        <div style={{ ...box }}>
          <h1
            style={{
              fontSize: "60px",
              color: "#001111",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            Smart homes for smart people
          </h1>
          <div style={{ marginTop: "100px", ...flexrow, gap: "15vw" }}>
            <div
              style={{
                width: "500px",
                height: "500px",
                backgroundColor: "black",
                borderRadius: "30px",
              }}
            >
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="./consumerHome.png"
                      class="d-block w-100"
                      alt="Consumer Home"
                    />
                  </div>
                  <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div
              style={{
                width: "500px",
                height: "500px",
              }}
            >
              <Link to="/consumer">Consumer</Link>
            </div>
          </div>
        </div>
      </section>
      <section id="section3">
        <div style={{ ...box }}>
          <h1
            style={{
              fontSize: "60px",
              color: "#001111",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            Get more from less – with our smart energy infrastructure offering
          </h1>
          <div style={{ marginTop: "100px", ...flexrow, gap: "15vw" }}>
            <div
              style={{
                width: "500px",
                height: "500px",
              }}
            >
              <Link to="/prosumer">Prosumer</Link>
            </div>
            <div
              style={{
                width: "500px",
                height: "500px",
                backgroundColor: "black",
                borderRadius: "30px",
              }}
            >
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="./consumerHome.png"
                      class="d-block w-100"
                      alt="Consumer Home"
                    />
                  </div>
                  <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section4">
        <div style={{ ...box }}>
          <Link to="/producer">Producer</Link>
        </div>
      </section>
      <section id="section5">
        <div style={{ ...box }}>
          <p>Contact Us</p>
        </div>
      </section>
         
    </div>
  );
}
