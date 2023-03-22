import * as React from 'react';
import Button from '@mui/material/Button';
import Menus from '@mui/material/Menu';
import MenuItems from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Menu, SettingsOutlined, AccessTimeOutlined, BookmarkBorderOutlined, Brightness3Outlined, ErrorOutlineOutlined } from '@mui/icons-material';
import { Divider, Grid, Box, createTheme } from '@mui/material';
import { ThemeChecker, ThemeSelection } from '../App';
import styled from '@emotion/styled';

const MoreButton = styled(Button)`
width: 100%;
display: flex;
justify-content:start;
margin-left:1.5rem;
color:gray;font-weight:bold;`

const MenuItemsList = styled(MenuItems)`
width: 245px;
display: flex;
justify-content: space-between; `

export default function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const themeSelection = React.useContext(ThemeSelection)
    const themeChecker = React.useContext(ThemeChecker)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
    };
    const menuBarData = [
        { content: 'setting', icon: <SettingsOutlined /> },
        { content: 'Your Activity', icon: <AccessTimeOutlined /> },
        { content: 'Saved', icon: <BookmarkBorderOutlined /> },
        { content: 'Switch appearance', icon: <Brightness3Outlined /> },
        { content: 'Report Problems', icon: <ErrorOutlineOutlined /> },
        { content: 'Switch Accounts ' },
        { content: 'Logout' }
    ]
    console.log('Fade Menu')

    const themes =createTheme({
            palette: {
                mode: 'dark'
            }
        })


    const themes2 = createTheme({
            palette: {
                mode: 'light'
            }
        })
    

    const changeTheme = (e) => {

        if (e.target.id === 'Switch appearance' && themeChecker.palette.mode === 'light') {
            themeSelection(themes)


        }
        if (e.target.id === 'Switch appearance' && themeChecker.palette.mode === 'dark') {
            themeSelection(themes2)

        }else if(e.target.id != 'Switch appearance'){
        setAnchorEl(null);

        }
    }

    return (
        <Grid container >
            <MoreButton
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                startIcon={<Menu color='action' />}
            >
                More
            </MoreButton>
            <Menus
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}


            >
                {menuBarData.map(element => {
                    return (
                        <Box key={element.content} onClick={changeTheme}>

                            <MenuItemsList
                                id={element.content}
                            >
                                {element.content}
                                {element.icon && element.icon}
                            </MenuItemsList>
                            {element != menuBarData[menuBarData.length - 1] && <Divider />}

                        </Box>


                    )
                })}



            </Menus>
        </Grid>
    );
}
