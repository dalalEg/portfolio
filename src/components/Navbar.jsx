import "../styles/Navbar.css";
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">ED</div>
      <nav className="nav-links">
        <a href="#about">About me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact me</a>
      </nav>
    </header>
  );
}