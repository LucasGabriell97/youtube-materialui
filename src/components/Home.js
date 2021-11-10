import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
    },
    icons: {
        paddingRight: theme.spacing(5),
    },
    grow: {
        flexGrow: 1,
    },
  }));
  
function Home() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar color='inherit' className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            edge='start'
                            className={classes.icons}
                            color='inherit'
                            aria-label='menu'
                            //sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <div className={classes.grow} />
                        <IconButton className={classes.icons} color='inherit'>
                            <MenuIcon />
                        </IconButton>
                        <IconButton className={classes.icons} color='inherit'>
                            <MenuIcon />
                        </IconButton>
                        <IconButton className={classes.icons} color='inherit'>
                            <MenuIcon />
                        </IconButton>
                        <Button startIcon={<AccountCircleOutlinedIcon />} variant="outlined" color="secondary">Fazer Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>    
        </div>
    )
}

export default Home;