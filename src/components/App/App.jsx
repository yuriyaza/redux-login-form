import { useSelector } from 'react-redux';
import { NavLink, Routes, Route } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { Home } from 'pages/Home/Home';
import { Products } from 'pages/Products/Products';
import { Specifications } from 'pages/Specifications/Specifications';

export const App = () => {
  const isLoggedIn = useSelector(state => state.userState.isLoggedIn);

  return (
    <>
      <Header />

      <nav>
        <NavLink to='/'>Home</NavLink>
          <span>&nbsp;</span>
        {isLoggedIn && <NavLink to='/products'>Products</NavLink>}
          <span>&nbsp;</span>
        {isLoggedIn && <NavLink to='/specifications'>Specifications</NavLink>}
      </nav>

      <hr />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/specifications' element={<Specifications />} />S
      </Routes>
    </>
  );
};
 