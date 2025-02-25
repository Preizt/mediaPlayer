import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
         <Navbar className="bg-info p-4" id='navbar'>
        <Container>
          <Link to={"/"} style={{textDecoration:"none"}} >
          <Navbar.Brand>
            <i className="fa-solid fa-music fa-bounce fa-xl me-3 ms-3"></i> 
            Media Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header