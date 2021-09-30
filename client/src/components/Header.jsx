import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    component: {
        background: '#ffffff',
        color: '#000000',
    },

    link: {
        textDecoration : 'none',
        color: 'inherit',
    },

    container: {
        justifyContent: 'center',
        '& > *': {
            padding: 20,
            cursor: 'pointer',
        }
    }
})

function Header() {
    const classes = useStyles();
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
            <Link to={'/'} className={classes.link}><Typography>Home</Typography></Link>
                <Typography>About</Typography>
                <Typography>Contact</Typography>
                <Typography>Login</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
