import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../../../components/menu-admin';
import ImgAdmin from '../../../assets/img/admin.png';
import Footer from '../../../components/footer-admin';



const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  fixedHeigth: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <MenuAdmin title={'DASHBOARD'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
          <img alt='imagem de adiministrador'src={ImgAdmin} />
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}