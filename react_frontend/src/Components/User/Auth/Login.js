import React from 'react'
import { Typography,Grid ,Card, CardContent,TextField} from '@mui/material';
import {makeStyles} from '@mui/styles';
import loginImage from './Image/login.jpg';
const useStyles = makeStyles({
    card:{
        maxWidth: 1000,
        margin: 'auto',
        textAlign: 'center',
        marginTop: '3%',
        padding: "0 5%",
        paddingBottom: '3%',
        boxShadow: '1px 1px 5px #ccc',
    },
    image:{
        width:'100%',
    },
    textFieldBox:{
        border: '#ccc',
        width: '95%',
        height: '45px',  
    },
   
  
 
  });
function Login() {
    const classes = useStyles(); 
    return (
       <div >
           <Card className={classes.card}>
                <Typography variant="h4">LOGIN FORM</Typography>
                <CardContent>
                    <Grid container  justifyContent="space-around" alignItems="center" spacing={1}>
                       <Grid itemxs={12} lg={8}>
                            <div><img className={classes.image} src={loginImage} /></div>
                       </Grid>
                       <Grid item xs={12} lg={4}>
                           <div className={classes.loginInfo}>
                            <TextField className={classes.textFieldBox} margin="normal" id="outlined-basic" label="Email" variant="outlined" />
                            <TextField className={classes.textFieldBox} margin="normal" id="outlined-basic" label="Password" variant="outlined" />
                           </div>
                        </Grid>
                    </Grid>
                    <Typography>Have no account?Here <a href="/register"> Sign up</a></Typography>
               </CardContent>
           </Card>
           
       </div>
    )
}

export default Login
