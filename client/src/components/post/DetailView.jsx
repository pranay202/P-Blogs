import React from 'react';
import { Box, Typography, makeStyles } from "@material-ui/core";
import { Edit , Delete } from "@material-ui/icons";

const useStyles = makeStyles({
    container: {
        padding: '0 100px'
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        border: '1px solid #878797'
    },
    heading: {
        fontSize: 54,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0',
    },
    subheading: {
        color: '#878787',
        display: "flex",
        margin: '20px 0'
    }
})

const DetailView = () => {
    const classes = useStyles();
    return (
        <>
        <Box className={classes.container}>
            <img 
            src="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" 
            alt="Detailed Post"
            className={classes.image}
            />
            <Box className={classes.icons}>
                <Edit className={classes.icon}/>
                <Delete className={classes.icon}/>
            </Box>
            <Typography className={classes.heading}>Title of the Blog</Typography>
            <Box className={classes.container}>
                <Typography className={classes.}>Author: Pranay Kharabe</Typography>
                <Typography className={classes.}>22 Sept, 2021</Typography>
            </Box>
        </Box>
        </>
    )
}

export default DetailView
