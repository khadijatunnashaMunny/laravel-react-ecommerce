import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Tab,
  Box,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import axios from "axios";
import swal from 'sweetalert';

const useStyles = makeStyles({
  ecomDescription: {
    padding: "2%",
  },
  ecomText: {
    alignItems: "center",
    textAlign: "center",
  },
  textFieldBox: {
    width: "100%",
  },
});
function Category() {
  const classes = useStyles();
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [categoryInput, setcategory] = useState({
    productId: "",
    productName: "",
    productDes: "",
    productPrice: "",
  });
  const handleInput = (e) => {
    e.persist();
    setcategory({ ...categoryInput, [e.target.name]: e.target.value });
  };
  const submitCategory=(e)=>{
    // e.preventDefault();

    const data={
      productId: categoryInput.productId,
      productName:categoryInput.productName,
      productDes:categoryInput.productDes,
      productPrice:categoryInput.productPrice,
    };

      axios.post('/api/register', data).then(res => {
        if (res.data.status === 200) {
        swal("success", res.data.message, "success");
      }
    });

  }
  return (
    <div className={classes.ecomText}>
      <Typography className={classes.ecomDescription} variant="h3">
        Add category
      </Typography>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Item One" value="1" />
                <Tab label="Item Two" value="2" />
              </TabList>
            </Box>
          <form onSubmit={submitCategory}>
            <TabPanel value="1">
              <Grid container spacing={0}>
                <Grid item xs={12} lg={7}>
                  <TextField
                    onChange={handleInput}
                    name="productId"
                    value={categoryInput.productId}
                    className={classes.textFieldBox}
                    margin="normal"
                    id="outlined-basic"
                    label="product Id"
                    variant="outlined"
                  />
                  <br />
                </Grid>
              <Grid item xs={12} lg={7}>
              <TextField
                onChange={handleInput}
                name="productName"
                value={categoryInput.productName}
                className={classes.textFieldBox}
                margin="normal"
                id="outlined-basic"
                label="product Name "
                variant="outlined"
              />
              </Grid>
              <br/>
              <Grid item xs={12} lg={7}>
              <TextField
                onChange={handleInput}
                name="productDes"
                value={categoryInput.productDes}
                className={classes.textFieldBox}
                margin="normal"
                id="outlined-basic"
                label="product Description"
                variant="outlined"
              />
              </Grid>
              <br />

              <Grid item xs={12} lg={7}>
              <TextField
                onChange={handleInput}
                name="productPrice"
                value={categoryInput.productPrice}
                className={classes.textFieldBox}
                margin="normal"
                id="outlined-basic"
                label="product Price"
                variant="outlined"
              />
              </Grid>
              </Grid>

            </TabPanel>
            <Button type="submit" variant="contained">Submit</Button>
          </form>
            <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default Category;
