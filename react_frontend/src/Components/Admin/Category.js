import React,{useState} from 'react'
import {Container,Typography,Grid,TextField,Tab, Box, Button,} from "@mui/material";

function Category() {
  const[productId,setProductid]=useState("");
  const[productName,setproductName]=useState("");
  const[productPrice,setproductPrice]=useState("");
  const[productDes,setproductDes]=useState("");

  async function signup(){
   
    let item ={productId,productName,productPrice,productDes}
    console.warn(item)
    let result= await fetch("http://127.0.0.1:8000/api/category",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json',
      }
    })
    result=await result.json()
    console.warn("result",result)
  }

  return (
    <div>
        <Typography variant="h3">Add category</Typography>
        <form >
          <Grid container spacing={0}>
            <Grid item xs={12} lg={7}>
              <TextField
                name="productId"
                margin="normal"
                onChange={(e)=>setProductid(e.target.value)}
                id="outlined-basic"
                label="product Id"
                value={productId}
                variant="outlined"
              />
              <br />
            </Grid>
            <Grid item xs={12} lg={7}>
              <TextField
                name="productName"
                margin="normal"
                value={productName}
                onChange={(e)=>setproductName(e.target.value)}
                id="outlined-basic"
                label="product Name "
                variant="outlined"
              />
            </Grid>
            <br />
            <Grid item xs={12} lg={7}>
              <TextField
              
                name="productDes"
                value={productDes}
                margin="normal"
                onChange={(e)=>setproductDes(e.target.value)}
                id="outlined-basic"
                label="product Description"
                variant="outlined"
              />
            </Grid>
            <br />

            <Grid item xs={12} lg={7}>
              <TextField
             
                name="productPrice"
                value={productPrice}
                onChange={(e)=>setproductPrice(e.target.value)}
                margin="normal"
                id="outlined-basic"
                label="product Price"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Button  onClick={signup} variant="contained">
            Submit
          </Button>
        </form>
      </div>
  )
}

export default Category
