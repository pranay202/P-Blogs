import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, makeStyles } from "@material-ui/core";
import { Edit , Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            padding:0
        }
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
        fontSize: 39,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0',
    },
    subheading: {
        color: '#878787',
        display: "flex",
        margin: '20px 0',
        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
    }
}));

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
                <Link to="/update"><Edit className={classes.icon}/></Link>
                <Delete className={classes.icon}/>
            </Box>
            <Typography className={classes.heading}>Title of the Blog</Typography>
            <Box className={classes.subheading}>
                <Typography>Author: Pranay Kharabe</Typography>
                <Typography style={{marginLeft:'auto'}}>22 Sept, 2021</Typography>
            </Box>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing el from whatever ipsum. tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev ||
Compiled successfully! tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev ||
Compiled successfully!tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev ||
Compiled successfully!</Typography>
        </Box>
        </>
    )
}

export default DetailView
