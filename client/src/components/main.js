import React from "react";
import { Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Stats from "./stats";
import Info from "./info";
import Home from "./home";
import Database from "./database";
import Caro from "./carousel";


const Main = () => {

return(
  <Router>
  <Navbar bg="dark" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="/"><img width="45px" height="45px" className="img-responsive" src='https://emojipedia-us.s3.amazonaws.com/source/skype/289/fire_1f525.png' alt="logo" />EqOnFire</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
      <Nav.Link href="/" className="nav-link" >Strona główna</Nav.Link>
        <NavDropdown title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item href="http://localhost:3001/database">Baza danych</NavDropdown.Item>
          <NavDropdown.Item href="http://localhost:3001/info">Informacje</NavDropdown.Item>
          <NavDropdown.Item href="http://localhost:3001/stats">Statystyki</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div>
<Caro />
<Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/database" element={<Database/>} />
          <Route path="/info" element={<Info/>} />
          <Route path="/stats" element={<Stats/>} />
</Routes>
      </div>
</Router>
    );
};

export default Main;