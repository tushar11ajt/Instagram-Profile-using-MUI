import React from 'react'
import {  Tabs, Tab ,styled} from '@mui/material'
import {  GridOnSharp,MovieFilterRounded,BookmarkBorderOutlined,PersonPinOutlined} from '@mui/icons-material';


const TabsSwitchComponent = () => {
    const [value, setValue] = React.useState(0);
    console.log('TabsSwitchComponentx')
    const TabStyled = styled(Tab)(({theme})=>({

      [theme.breakpoints.down('md')]:{padding:0,height:'auto'}
    
    }))
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <Tabs  value={value} onChange={handleChange} >
            <TabStyled iconPosition='start' label='Posts' icon={<GridOnSharp fontSize='small' />} />
            <TabStyled iconPosition='start' icon={<MovieFilterRounded fontSize='small' />} label="Reels" />
            <TabStyled iconPosition='start' icon={<BookmarkBorderOutlined fontSize='small' />} label="Saved" />
            <TabStyled iconPosition='start' icon={<PersonPinOutlined fontSize='small' />} label="Tag" />
        </Tabs>
    )
}

export default TabsSwitchComponent
