import React, { useEffect } from 'react';
import './Navbar.css'
import { useDispatch } from 'react-redux';
import { setNewUser } from '../../redux/actions/GlobalActions';

const Navbar = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setNewUser('Hello'))
    })
    return (
        <nav className= "nav-container">

        </nav>
    );
}

export default Navbar;

