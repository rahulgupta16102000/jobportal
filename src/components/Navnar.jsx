import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';
import { employeeService } from '../_service/empolyee.service';
import { Button } from '@mui/material';
export default function NavBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
const navigate=useNavigate()

  const  user  = employeeService.userValue
  

  console.log("dgsfhghj",user)

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut =()=>{
     console.log("logout")
     setAnchorEl(null);
     localStorage.removeItem("userInfo");
     //  userSubject.next(null);
      navigate("/login");
      window.location.reload()
  }
  const handleLogin =()=>{
    
    setAnchorEl(null);
    
     navigate("/login");
     window.location.reload()
 }
  const handleAdminDashboard =()=>{
    navigate("/admindashboard");
  }
  const handleJobs=()=>{
    navigate("/jobs");
  }
const   handleHome=()=>{
  
  navigate(".")
}
  return (
    <Box sx={{ flexGrow: 1  }}>
      
      <AppBar position="fixed"  style={{backgroundColor:'white',color:'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Searching
          </Typography>
          <MenuItem  onClick={handleHome}>Home</MenuItem>
          <MenuItem  onClick={handleJobs}>Jobs</MenuItem>

         { user && user.role==="Admin" && <Button color='primary' variant='outlined' onClick={handleAdminDashboard}>Admin Panel</Button>}
          {user ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
                {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
              </Menu>
            </div>
          ) : (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogin}>LogIn</MenuItem>
                {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
              </Menu>
            </div>
          )
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}