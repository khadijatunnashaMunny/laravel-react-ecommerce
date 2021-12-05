import React,{useState} from 'react'
import { Typography,Grid ,Container, Card,TextField,CardContent,Button} from '@mui/material';
import {makeStyles} from '@mui/styles';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate  } from "react-router-dom";

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
    textFieldBox:{
        border: '#ccc',
        width: '95%',
        height: '45px',  
    }
 
  });
function Register() {
    const history  = useNavigate();
    const classes = useStyles(); 
    const [registerInput,setRegisterInput]=  useState({
        fname:'',
        lname:'',
        email:'',
        phone:'',
        password:'',
        cpassword:'',
    });
    const handleInput=(e)=>{
        e.persist();
        setRegisterInput({...registerInput,[e.target.name]:e.target.value});
    }
    const registerSubmit=(e)=>{
        e.preventDefault();
        const data={
            fname:registerInput.fname,            
            lname:registerInput.lname,
            email:registerInput.email,
            phone:registerInput.phone,
            password:registerInput.password,
            cpassword:registerInput.cpassword,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/register',data).then(res=>{
                if(res.data.status ===200){
                    localStorage.setItem('auth_username',res.data.username);
                    swal("success",res.data.message,"success");
                    history.push('/');
                }
            });
        });
    }
    return (
       <div >
           <Card className={classes.card}>
           <Typography variant="h4">REGISTRATION</Typography>
           <Typography>Create an account and let companies apply to you</Typography>
            <CardContent>
            <form onSubmit={registerSubmit}>
                <Grid container spacing={0}>
                    <Grid item xs={12} lg={6}>
                        <TextField onChange={handleInput} name="fname" value={registerInput.fname} className={classes.textFieldBox} margin="normal" id="outlined-basic" label="First name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField onChange={handleInput} name="lname" value={registerInput.lname} className={classes.textFieldBox} margin="normal" id="outlined-basic" label="First name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField onChange={handleInput} name="email" value={registerInput.email} className={classes.textFieldBox} margin="normal" id="outlined-basic" label="Email" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField onChange={handleInput} name="phone" value={registerInput.phone} className={classes.textFieldBox} margin="normal" id="outlined-basic" label="Phone number" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField onChange={handleInput} name="password" value={registerInput.pass} className={classes.textFieldBox} margin="normal" id="outlined-basic" label="Password" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField onChange={handleInput} name="cpassword" value={registerInput.cpass} className={classes.textFieldBox} margin="normal" id="outlined-basic" label="Confirm password" variant="outlined" />
                    </Grid>
                </Grid>
                <br/>
                <Button type="submit" variant="contained" color="primary">SUBMIT</Button>
            </form>  
            <br/>
            <Typography>Already have an account?</Typography>
            <a href="/login">
                <Typography variant="h6">LOGIN</Typography>
            </a>

            </CardContent>
           </Card>
       </div> 
    )
}

export default Register
