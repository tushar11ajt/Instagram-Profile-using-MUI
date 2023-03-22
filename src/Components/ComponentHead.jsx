import { Grid, Stack, Button, Typography, Box, IconButton, Menu, MenuItem } from "@mui/material";
import React, { Fragment, useCallback, useState } from "react";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SwitchProfileSection from "../SwitchProfileSection";
import styled from "@emotion/styled";


const GridParent = styled(Grid)(({theme})=>({
  height:'25.8rem',
   [theme.breakpoints.down('md')]:{display:'grid',placeItems:'center',width:'100vw',height:'auto',boxSizing:'border-box',justifyContent:'normal',marginBottom:'1rem',}
   
}))

const GridProfileImage = styled(Grid)(({theme})=>({
  display: 'flex',
  alignItems:'center',
  justifyContent:'center', 
   paddingLeft: '3rem',
   [theme.breakpoints.down('md')]:{paddingLeft: 0,height:'11.6rem'}
 
}))
const SwitchProfileSectionStyled = styled(Button)(({theme})=>({

   [theme.breakpoints.down('md')]:{display:'none'}
 
}))

const BoxPostsFollowers = styled(Box)`font-weight: bold; font-size: 1.1rem
`

const ComponentHead = () => {
  console.log('component Head')
  const [anchorEl, setAnchorEl] = React.useState(null);


  const instaUsersData = {
    tushar: {
      userName: 'tushar_maheshwari__', posts: '95', following: '99', followers: '789', bio: ['🕉️', '.', ' कर्पूरगौरं करुणावतारं', 'संसारसारम् भुजगेन्द्रहारम् ।🚩', '.', 'सदावसन्तं हृदयारविन्दे ', 'भवं भवानीसहितं नमामि ॥🚩']
      , image: "https://tse3.mm.bing.net/th?id=OIP.iSu2RcCcdm78xbxNDJMJSgHaEo&pid=Api&P=0", bioName: 'तुषार महेशवरी❤ (चौधराणा)❤'
    },
    raghav: { userName: '_raghav998_', posts: '74', following: '189', followers: '689', bio: ['Nature', '❤', ' 💥', 'Positive Vibes', '.!.!.!.!.!', 'Happy Mood', '❌'], image: 'https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg', bioName: 'राघव श्रीवास्तव✌' },
    sourabh: { userName: 'sourabh__56200', posts: '44', following: '19', followers: '5289', bio: ['Care ❣', 'Share 🆎', 'Together 🙌', 'Forever  🎉', '💎', 'Rubicorn 🎳 ', 'Carzzzzzzzz  🚗'], image: "https://tse3.mm.bing.net/th?id=OIP.bPBCgvp9N0SUbVYJnBg2IQHaEo&pid=Api&P=0", bioName: 'सौरभ कौशिक✔' },
  }

  const [userprofileData, setUserProfileData] = useState(instaUsersData.tushar)

  const handleClose = (e) => {

    setAnchorEl(null);
    setUserProfileData(instaUsersData[e.target.id])

  };


  return (
    <>
      <GridParent container >
        <GridProfileImage
          item
          xs={12} sm ={5}
        >
          <img
            className="profileImage"
            src={userprofileData.image}
          />
        </GridProfileImage>
        <Grid item md={7}>
          <Stack
            pt={5}
            sx={{ display: "flex", height: "4.5rem" }}
            columnGap={2}
            direction="row"
          >
            <Typography variant="h6">{userprofileData.userName}</Typography>
            <SwitchProfileSectionStyled variant="contained" size="small" >
              Edit Profile
            </SwitchProfileSectionStyled>
            <SwitchProfileSectionStyled variant="contained" size="small" >
              Ad tools
            </SwitchProfileSectionStyled>
            <IconButton >
              <SettingsOutlinedIcon color='action' />
            </IconButton>

            <SwitchProfileSection handleClose={handleClose} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
          </Stack>
          <Stack direction="row" spacing={5} py={3}>
            <Box>
              <BoxPostsFollowers
                component="span"
              >
                {userprofileData.posts}
              </BoxPostsFollowers>
              {' posts'}
            </Box>
            <Box>
              <BoxPostsFollowers
                component="span"
              >
                {userprofileData.followers}
              </BoxPostsFollowers>
              {' folllowers'}
            </Box>
            <Box>
              <BoxPostsFollowers
                component="span"
              >
                {userprofileData.following}
              </BoxPostsFollowers>
              {' following'}
            </Box>
          </Stack>
          <Stack>
            <BoxPostsFollowers
              variant="subtitle1">
              {userprofileData.bioName}
            </BoxPostsFollowers>
            <Typography sx={{ color: "gray" }} variant="subtitle1" m={0} p={0}>
              Personal blog
            </Typography>
            {userprofileData.bio.map((element, index) => {
              return (<Fragment key={index}>{element} < br /></Fragment>)
            })}


          </Stack>
        </Grid>
      </GridParent>
    </>
  );
};

export default ComponentHead;
