import React, { memo } from 'react'
import { Box, Typography, Drawer, AppBar, CssBaseline, Toolbar, Divider, List, ListItem, ListItemButton, ListItemText, Badge } from '@mui/material'
import { HouseOutlined, SearchTwoTone, ExploreOutlined, MovieFilterRounded, ForumOutlined, FavoriteBorderOutlined, AddBoxOutlined, Inbox, Mail, ImportantDevices } from '@mui/icons-material';
import ListItemIcon from '@mui/material/ListItemIcon';
import FadeMenu from './FadeMenu';
import styled from '@emotion/styled';
import { red } from '@mui/material/colors';

const drawerWidth = 240;

const InstagramHead = styled(Typography)` font-weight:bold;font-family: 'Great Vibes', cursive`

const ListItemListComp = styled(ListItemText)`font-weight:700`

const DrawerStyled = styled(Drawer)(({theme}) => ({
    [theme.breakpoints.down('md')]: {
        display:'none'
    }
}))

const AsideBar = () => {
    const instaSideBarData = [{
        icon: <HouseOutlined style={{ fontSize: '35px' }} />,
        content: 'Home',
    }, {
        icon: <SearchTwoTone style={{ fontSize: '35px' }} />,
        content: 'Search',
    }, {
        icon: <ExploreOutlined style={{ fontSize: '35px' }} />,
        content: 'Explore',
    }
        , {
        icon: <MovieFilterRounded style={{ fontSize: '35px' }} />,
        content: 'Reels',
    }, {
        icon: <Badge badgeContent={4} color="error">

            <ForumOutlined style={{ fontSize: '35px' }} />
        </Badge>,
        content: 'Messages',
    }, {
        icon: <FavoriteBorderOutlined style={{ fontSize: '35px' }} />,
        content: 'Notifications',
    }, {
        icon: <AddBoxOutlined style={{ fontSize: '35px' }} />,
        content: 'Create',
    }, {
        image: 'https://tse3.mm.bing.net/th?id=OIP.iSu2RcCcdm78xbxNDJMJSgHaEo&pid=Api&P=0',
        content: 'Profile',
    }]
    console.log("Aside Bar")

    return (


        <DrawerStyled
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >

            <InstagramHead variant='h4' p={3} >Instagram</InstagramHead>
            <List >
                {instaSideBarData.map(element => {
                    return (
                        <ListItem sx={{ p: .8 }} key={element.content} disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: 'inherit' }} >
                                    {element.icon ? element.icon : <img
                                        className='asideBarProfileImage'
                                        src={element.image} />
                                    }
                                </ListItemIcon>
                                <ListItemListComp primary={element.content} />
                            </ListItemButton>
                        </ListItem>)
                })}
            </List>
            <Box pt={6}>

                <FadeMenu />
            </Box>

        </DrawerStyled>

    )
}

export default memo(AsideBar)
