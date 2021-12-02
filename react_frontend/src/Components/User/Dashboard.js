import { Container, Typography ,Grid} from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {makeStyles} from '@mui/styles';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'

const useStyles = makeStyles({
    ecomDescription:{
        padding:'2%'
    },
    ecomText: {
      alignItems:'center',
      textAlign:'center',
      marginTop:'3%'
    },
  });
function AdminDashboard() {
    const classes = useStyles(); 

    return (
        <div>
            <Header/>
            <div className={classes.ecomText}>
                <Typography className={classes.ecomDescription} variant="h3">Ecommerce</Typography>
                <Container>
                <Typography className={classes.ecomDescription} >
                    Create an online store with the leading eCommerce platform
                    Sell online with a professional online store. Launch, run and scale your online store with our industry-leading eCommerce website builder and advanced business features.
                </Typography>
                <div>
                    <Typography className={classes.ecomDescription} variant="h4">The simple way to tackle the complexity of selling online</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={4}>
                            <div><img className={classes.image} src={img1} /></div>
                            <Typography variant="h5" className={classes.ecomDescription}>Start a trial</Typography>
                            <Typography>Build a store that caters to your unique business needs—with the design tools, features, and support to get you up and running.</Typography>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <div><img className={classes.image} src={img2} /></div>
                            <Typography variant="h5" className={classes.ecomDescription} >Launch your store</Typography>
                            <Typography>Design and customize a beautiful storefront with powerful features and expert ecommerce support along the way.</Typography>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <div><img className={classes.image} src={img3} /></div>
                            <Typography variant="h5" className={classes.ecomDescription} >Grow your business</Typography>
                            <Typography>Build your brand with a storefront designed to jumpstart growth, from your very first sale onward.</Typography>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Typography variant="h4" className={classes.ecomDescription}>Featured products</Typography>

                    </div>
                </Container>
            </div>
            <Footer/>
            
        </div>
    )
}

export default AdminDashboard
