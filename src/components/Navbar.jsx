
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/"><h1>Español com Carol</h1></a>
      
      <div className="links">
        <a href="/academia"> Academia </a>
        <a href="/sobre-carol"> Sobre Carol </a>
        <a href="/blog"> Blog </a>
        <a href="/contacto"> Contacto </a>
        <a href="/ingresar"
          style={{
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
          }}
        > Ingresar</a>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <a href="/newsletter"> Newsletter </a>
<a href="/podcast"> Podcast </a> */
}

/* style={{
  color: "white",
  backgroundColor: "#f1356d",
  borderRadius: "8px"
}} */
