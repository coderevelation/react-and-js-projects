import React from 'react'
import logo from '../assets/Logo.svg'
// to use react-icons, we will import the specific icons we need from the library
// import { FaHome, FaInfoCircle, FaServicestack, FaPhone } from 'react-icons/fa'

import { BsCart2 } from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { Box,
        Drawer, 
        List, 
        ListItem, 
        ListItemIcon, 
        ListItemText 
    } from '@mui/material'

import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'


function Navbar() {
    const [openMenu, setOpenMenu] = React.useState(false)
    // we will use this state to toggle the menu on and off when the user clicks the menu icon
 
    const menuOptions = [
        { name: 'Home', icon: <HomeIcon />}, 
        { name: 'Info', icon: <InfoIcon />}, 
        { name: 'Testimonials', icon: <CommentRoundedIcon />}, 
        { name: 'Phone', icon: <PhoneRoundedIcon />}, 
        { name: 'Cart', icon: <ShoppingCartRoundedIcon />}, 
    ] // this is an array of objects that will be used to generate the menu options in the navbar  



    return (

    <nav>
        <div className='nav-logo-container'><img src={logo} alt="" /></div>
        
        <div className="navbar-links-container">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testimonials</a>
            <a href="">Contact</a>
            <a href="">
                <BsCart2 className='navbar-cart-icon' />
            </a>
            <button className='primary-button'>Order Now</button>
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            <Drawer anchor='right' open={openMenu} onClose={() => setOpenMenu(false)}>
                <Box sx={{ width: 250 }} role='presentation' onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
                    <List>
                        {menuOptions.map((option) => (
                            <ListItem key={option.name} disablePadding>
                                <ListItemIcon>{option.icon}</ListItemIcon>
                                <ListItemText primary={option.name} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    </nav>
  )
}

export default Navbar