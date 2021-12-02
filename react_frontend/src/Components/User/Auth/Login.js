import React from 'react'
import { Typography,Grid ,Container} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    heading:{
        background:"#00796A",
        height:'100px',
        width:'100%',
        
    },
 
  });
function Login() {
    const classes = useStyles(); 
    return (
       <div >
           <Typography>LOGIN FORM</Typography>
           
       </div>
    )
}

export default Login
