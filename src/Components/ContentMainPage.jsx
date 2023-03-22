import { Divider, Grid, ImageListItem, Box, styled } from '@mui/material'
import React, { memo } from 'react'
import ComponentHead from './ComponentHead'
import StoryImageSection from './StoryImageSection'
import TabsSwitchComponent from './TabsSwitchComponent';
const GridStorySection = styled(Grid)`
height: 11rem; `

const ImageListItemStyled = styled(ImageListItem)(({theme})=>({
  transition: "0.3s all linear",
  "&:hover": { cursor: 'pointer', translate: '0px -0.3rem' },
  [theme.breakpoints.down('md')]:{
 
        '&> img':{height:'10rem !important'},
    '&> div':{height:'10rem !important'}
  }

}))

const ImageListItemStyledBox = styled(Box)(({theme})=>({
  display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', height: '20rem', position: 'absolute', top: 0, left: 0, fontWeight: 'bold', color: 'white', fontSize: '18px', opacity: 0, transition: "0.3s all linear",
  '&:hover': { backgroundColor: 'rgba(0,0,0,0.4)', opacity: 1 }
}))

const ContentMainPage = () => {
  const storyImageData = [
    { image: 'https://tse1.mm.bing.net/th?id=OIP.-GQVbWlcrSIbYYM1udyddgHaHa&pid=Api&P=0', text: 'Taj Mahal' },
    { image: 'https://tse3.mm.bing.net/th?id=OIP.EjFwigSppjLuhEC109mk_wHaFE&pid=Api&P=0', text: 'Hawa Mahal' },
    { image: 'https://tse2.mm.bing.net/th?id=OIP.uO9qD8ZzVcXvotafKR3EjQHaHa&pid=Api&P=0', text: 'Red Fort' },
    { image: 'https://tse3.mm.bing.net/th?id=OIP.pCDjhQl3BPO2FG7NVJrAegHaFj&pid=Api&P=0', text: 'Pyramid' },
    { image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Agra-Fort-Uttar-Pradesh.jpg', text: 'Agra Fort' },
    { image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Humayun%E2%80%99s-Tomb-Delhi.jpg', text: 'Humayun’s Tomb' },
    { image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Khajuraho-Temples-Madhya-Pradesh.jpg', text: 'Khajuraho Temples' },
    { image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Rani-ki-Vav-Gujarat.jpg', text: ' Rani ki Vav' },
    { image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Golden-Temple.jpg', text: 'Golden Temple' },
    { image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/India-Gate.jpeg', text: 'India Gate' },
    { image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Kumbhalgarh-Fort.jpg', text: 'Taj Mahall' },
    { image: 'https://tse1.mm.bing.net/th?id=OIP.-GQVbWlcrSIbYYM1udyddgHaHa&pid=Api&P=0', text: 'Kumbhalgarh Fort' },

  ]

  return (
    <>
      <Grid container   justifyContent='center'>
        <Grid item xs={12}>
          <ComponentHead />
        </Grid>

        <GridStorySection item md={10} xs={11}
        >
          <StoryImageSection />
          <Divider />
        </GridStorySection>



        <Grid  item md={10} xs={11} display='flex' flexDirection='column' alignItems='center'>
          <TabsSwitchComponent />
          
          <Grid mt={0.3} item  container  xs={12} spacing={5}>
          
            {storyImageData.map(element => {
              return (

                <Grid item  xs={4} key={element.text} >
                  <ImageListItemStyled 
                  >

                    <img  style={{ width: '100%', height: '20rem', position: 'relative' }} src={element.image} />
                    <ImageListItemStyledBox >
                      <Box variant='h6' >❤ 23</Box>
                      <Box variant='h6' >🗨 99</Box>

                    </ImageListItemStyledBox>
                  </ImageListItemStyled>

                </Grid>
              )
            })}


          </Grid>
        </Grid>

      </Grid>
    </>
  )
}

export default memo(ContentMainPage)