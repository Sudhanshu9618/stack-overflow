import React,{ useEffect} from 'react'
// import './App.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg';
import Avatar from '../../components/Avatar/Avatar';

import './Navbar.css';
import { setCurrentUser } from '../../actions/currentUser';

const Navbar = () => {

    const dispatch=useDispatch()
    var User=useSelector((state)=>(state.currentUserReducer));


    useEffect(()=>{
      dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])

  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img  src={logo}  height='24px' alt='logo'/>
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type='text' placeholder='search....'/>
                <img src={search} width='18px' alt="search" className='search-icon' />
            </form>
             {User === null ? 
              <Link to='/Auth' className='nav-item nav-links' >Login</Link>:
              <>
              <Avatar backgroundColor='#009dff' px='14px' py='7px' borderRadius='50%' color='white'> <Link to='/User' style={{color:'white',textDecoration:'none'}}>S</Link></Avatar>
                <button className='nav-item nav-links'>Log Out</button>
              </>
             }
        </div>
    </nav>
  )
}

export default Navbar;