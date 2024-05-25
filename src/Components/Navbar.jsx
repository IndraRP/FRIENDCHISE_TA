import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const MyNavbar = () => {
  const [changeColor, setChangeColor] = useState(false);

  useEffect(() => {
    const changeBackgroundColor = () => {
      if (window.scrollY > 10) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    };

    changeBackgroundColor(); // Initial check
    window.addEventListener('scroll', changeBackgroundColor);

    return () => {
      window.removeEventListener('scroll', changeBackgroundColor);
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className={changeColor ? 'color-active' : ''}>
        <Container>
          <Navbar.Brand className="fs-3 fw-bold" href="/Home">
            FriendChise
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              <Nav.Link as={NavLink} to="/Home" className="rounded-1 fw-bold">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Franchise" className="rounded-1 fw-bold">
                Franchise
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Testimoni" className="rounded-1 fw-bold">
                  Rekomendasi
              </Nav.Link>
              {/* Tambahkan link lainnya sesuai kebutuhan */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
