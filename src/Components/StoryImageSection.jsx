import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import styled from '@emotion/styled';
const StackImageData = styled(Stack)`height: 11rem;  `
const StoryImageSection = () => {
    const storyImageData = [
        { image: 'https://tse1.mm.bing.net/th?id=OIP.-GQVbWlcrSIbYYM1udyddgHaHa&pid=Api&P=0P=0', text: 'Taj Mahal' },
        { image: 'https://tse3.mm.bing.net/th?id=OIP.EjFwigSppjLuhEC109mk_wHaFE&pid=Api&P=0', text: 'Hawa Mahal' },
        { image: 'https://tse2.mm.bing.net/th?id=OIP.uO9qD8ZzVcXvotafKR3EjQHaHa&pid=Api&P=0', text: 'Red Fort' },
        { image: 'https://tse3.mm.bing.net/th?id=OIP.pCDjhQl3BPO2FG7NVJrAegHaFj&pid=Api&P=0', text: 'Pyramid' },
        { image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Agra-Fort-Uttar-Pradesh.jpg', text: 'Agra Fort' },
        { image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Humayun%E2%80%99s-Tomb-Delhi.jpg', text: 'Humayun’s Tomb' },
        { image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Khajuraho-Temples-Madhya-Pradesh.jpg', text: 'Khajuraho Temples' },
        { image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Rani-ki-Vav-Gujarat.jpg', text: ' Rani ki Vav' },
        { image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Golden-Temple.jpg', text: 'Golden Temple' },
        { image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/India-Gate.jpeg', text: 'India Gate' },
        { image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Kumbhalgarh-Fort.jpg', text: 'Taj Mahal' },
        { image: 'https://tse1.mm.bing.net/th?id=OIP.-GQVbWlcrSIbYYM1udyddgHaHa&pid=Api&P=0', text: 'Kumbhalgarh Fort' },

    ];
    console.log('story Image Section')
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 10,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
        },
    }

    return (

        <Carousel responsive={responsive} >
            {storyImageData.map(element => {
                return (
                    <StackImageData key={element.text}

                      >
                        <img style={{ width: '6.2rem', height: '6.2rem', borderRadius: "50%", padding: '3px', border: "1px solid lightgray", cursor: "pointer", marginBottom: "0.5rem" }} src={element.image} />
                        <Typography>{element.text}</Typography>
                    </StackImageData>
                )
            })}




        </Carousel>


    )
}

export default StoryImageSection
