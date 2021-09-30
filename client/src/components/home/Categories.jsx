import React from 'react';
import { Button,makeStyles, Table,TableRow, TableBody, TableCell, TableHead } from '@material-ui/core';
import {categories} from "../../constants/data.js"

const useStyles = makeStyles({
    create: {
        margin:20,
        background: '#0dcaf0',
        color: 'white',
        fontWeight: 'bold',
        width: '80%'
    },
    table: {
        border: '1px solid rgba(224, 224, 224, 1)',
    }
});

const Categories = () => {
    const classes = useStyles();
    return (
        <>
            <Button varient="contained" className={classes.create}>Create Blog</Button>    

            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>All Categories</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    categories.map(category => (
                        <TableRow>
                            <TableCell>{category}</TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
            </Table>       
        </>
    )
}

export default Categories;
