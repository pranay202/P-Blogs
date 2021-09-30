import React from 'react'
import Post from './Post';
import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';

const Posts = () => {
    let Posts = [1,2,3,4,5,6,7,8,9,10,12,13];
    return (
        Posts.map(post => (
        <Grid item lg={3} sm={4} xs={12}>
        <Link to={'/details'} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Post />
        </Link>
        </Grid>
        ))
    )
};

export default Posts;
