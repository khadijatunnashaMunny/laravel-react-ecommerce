import React, { Component, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Tab,
  Box,
  Button,
} from "@mui/material";
import axios from "axios";

class Student extends Component {
  state = {
    productId: "",
    productName: "",
    productDes: "",
    productPrice: "",
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]:e.target.value,
    });
  }
  submitCategory = (e) => {
    e.preventDefault();
   
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('http://127.0.0.1:8000/api/add_student',  this.state).then(res => {
            if (res.data.status === 200) {
               console.log(res.data.message);
               this.setState({
                productId: "",
                productName: "",
                productDes: "",
                productPrice: "",
              });
            }
        });
    
   
     
});
  };

  render() {
    return (
      <div>
        <Typography variant="h3">Add category</Typography>
        <form >
          <Grid container spacing={0}>
            <Grid item xs={12} lg={7}>
              <TextField
                name="productId"
                margin="normal"
              
                id="outlined-basic"
                label="product Id"
               
                variant="outlined"
              />
              <br />
            </Grid>
            <Grid item xs={12} lg={7}>
              <TextField
                name="productName"
                margin="normal"
               
              
                id="outlined-basic"
                label="product Name "
                variant="outlined"
              />
            </Grid>
            <br />
            <Grid item xs={12} lg={7}>
              <TextField
              
                name="productDes"
                margin="normal"
                id="outlined-basic"
                label="product Description"
                variant="outlined"
              />
            </Grid>
            <br />

            <Grid item xs={12} lg={7}>
              <TextField
             
                name="productPrice"
                margin="normal"
                id="outlined-basic"
                label="product Price"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Student;
