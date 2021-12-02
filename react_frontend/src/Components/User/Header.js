import React from 'react'
import { Typography,Grid ,Container} from '@mui/material';
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
      color:'#fff'
      
    },
  });
function Header() {
    const classes = useStyles(); 
    return (
       <div className={classes.heading}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <div className={classes.headerMenu}>
                        <Typography>logo</Typography> 
                        <Typography>Ecommerce</Typography>
                        <Typography>Ecommerce</Typography>
                        <Typography>Ecommerce</Typography>
                    </div>
                </Grid> 
                <Grid item xs={7}>
                </Grid>
                <Grid item xs={2}>
                    <div className={classes.headerMenu}>
                        <Typography>Login</Typography>
                        <Typography>Register</Typography>
                    </div>
                </Grid> 
            </Grid>      
       </div>
    )
}

export default Header
