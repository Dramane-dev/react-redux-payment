import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/navbar.scss';
//   return (
//     <Nav className='navbar'>
//       <Nav.Item>
//         <Nav.Link>
//             <Link to="/">{home}</Link>
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link>
//             <Link to="/Products">Products</Link>
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link>
//             <Link to="/ShoppingCart">Cart</Link>
//         </Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// };
const Navbar = () => {
  const home = 'Home';

  return (
   <div className='navbar'>
     <li>
      <Link className='link' to="/">{home}</Link>
     </li>
     <li>
      <Link className='link' to="/Products">Products</Link>
     </li>
     <li>
      <Link className='link' to="/ShoppingCart">Cart</Link>
     </li>
   </div>
  );
};

export default Navbar;
