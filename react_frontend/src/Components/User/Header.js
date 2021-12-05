import React from 'react'
import { Typography,Grid ,Container, Button} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    heading:{
        background:"#00796A",
        height:'100px',
        width:'100%',
        
    },
    headerMenu: {
      alignItems:'center',
      textAlign:'center',
      display: 'flex',
      justifyContent:'space-evenly',
      color:'#fff',
      textDecoration:'none',
    },
  });
function Header() {
    const classes = useStyles(); 
    return (
       <div className={classes.heading}>
            <Grid container spacing={1} >
                <Grid item xs={12} lg={3}>
                    <div className={classes.headerMenu}>
                        <Typography>logo</Typography> 
                        <Typography>Ecommerce</Typography>
                        <Typography>Ecommerce</Typography>
                        <Typography>Ecommerce</Typography>
                    </div>
                </Grid> 
                <Grid item lg={7}>
                </Grid>
                <Grid item xs={12} lg={2}>
                    <div  className={classes.headerMenu}>
                    <Button variant="contained" ><a className={classes.headerMenu} href="/login">Sign in</a></Button>
                    <Button variant="contained" ><a className={classes.headerMenu} href="/register">Signup</a></Button>
                    </div>
                </Grid> 
            </Grid>      
       </div>
    )
}

export default Header
