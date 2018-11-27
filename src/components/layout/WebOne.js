import React from "react";

export default function WebOne() {
  return (
    <div className="webone-container">
      <img src="https://via.placeholder.com/200" alt="image" />
      <nav className="main-menu-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Work</li>
          <li>Profile</li>
        </ul>
      </nav>
      <aside className="side-nav-container">
        <ul>
          <li>Hello</li>
          <li>from</li>
          <li>the</li>
          <li>side-bar</li>
          <li>Hello</li>
          <li>from</li>
          <li>the</li>
          <li>side-bar</li>
        </ul>
      </aside>
      <main className="three-up-container">
        <div className="three-up-item">three</div>
        <div className="three-up-item">three</div>
        <div className="three-up-item">three</div>
      </main>
      <footer>
        <p>get to the footah!</p>
      </footer>
    </div>
  );
}
