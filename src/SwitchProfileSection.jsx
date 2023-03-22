import React from 'react'
import { Menu, MenuItem,Button } from "@mui/material";
import { Stack } from '@mui/system';

const SwitchProfileSection = ({ handleClose ,anchorEl,setAnchorEl}) => {
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
    return (
        <Stack>

        <Button
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{ fontWeight: 'bold' }}
            >
              Switch
            </Button>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <MenuItem id='tushar' onClick={handleClose}>tushar_maheshwari__</MenuItem>
            <MenuItem id='sourabh' onClick={handleClose}>Sourabh Dhiman</MenuItem>
            <MenuItem id='raghav' onClick={handleClose}>Raghav Sharma</MenuItem>
        </Menu>
        </Stack>
    )
}

export default SwitchProfileSection
