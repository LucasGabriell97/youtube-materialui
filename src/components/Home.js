import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, AppBar, Toolbar, IconButton, Button, ListItemText, ListItemIcon, InboxIcon, MailIcon, Divider, List, ListItem, Typography, CssBaseline, Drawer, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';

import HomeIcon from '@material-ui/icons/Home';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';

import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import History from '@material-ui/icons/History';

import AddCircle from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    icons: {
        //paddingRight: theme.spacing(3),
        color: '#000'
    },
    logo: {
        height: 30,
        paddingLeft: theme.spacing(1.5),
    },
    drawer: {
        width: 240,
        flexShrink: 0,
      },
      drawerPaper: {
        width: 240,
        borderRight: 'none',
      },
    grow: {
        flexGrow: 1,
    },
    button: {
        borderRadius: 2,
    },
    ListItemText: {
        fontSize: 14,
    },
    listItem: {
        paddingTop: 5,
        paddingBottom: 5,
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
                            color='inherit'
                            aria-label='menu'
                            //sx={{ fontSize:  }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src='/imgs/yt_logo.png' alt='Logo' className={classes.logo}/>
                        <div className={classes.grow} />
                        <IconButton className={classes.icons} color='inherit'>
                            <KeyboardVoiceIcon />
                        </IconButton>
                        <IconButton className={classes.icons} color='inherit'>
                            <AppsIcon />
                        </IconButton>
                        <IconButton className={classes.icons} color='inherit'>
                            <MoreVertIcon />
                        </IconButton> 
                        <Button startIcon={<AccountCircleOutlinedIcon />} className={classes.button} variant="outlined" color="secondary">Fazer Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon className={classes.icons} >{<HomeIcon />}</ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary: classes.ListItemText, 
                                }}
                                primary={'Início'} 
                            />
                        </ListItem>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon className={classes.icons} >{<ExploreOutlinedIcon />}</ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary: classes.ListItemText, 
                                }}
                                primary={'Explorar'} 
                            />
                        </ListItem>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon className={classes.icons} >{<SubscriptionsOutlinedIcon />}</ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary: classes.ListItemText, 
                                }}
                                primary={'Inscrições'} 
                            />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon className={classes.icons}>
                                <VideoLibraryOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.ListItemText,
                                }} 
                                primary={'Biblioteca'} 
                            />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className={classes.icons}>
                                <History />
                            </ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary: classes.ListItemText,
                                }}
                                primary={'Histórico'} 
                            />
                        </ListItem>
                    </List>
                    <Divider />
                    <Box p={4}>
                        <Typography variant='body2'>
                            Faça login para curtir vídeos, comentar e se inscrever.
                        </Typography>  
                        <Box mt={2}>
                            <Button
                                className={classes.button}
                                variant='outlined'
                                color='secondary'
                                startIcon={<AccountCircleOutlinedIcon />}  
                            >   
                                Fazer Login
                            </Button> 
                        </Box>               
                    </Box>
                </div>
            </Drawer>    
        </div>
    )
}

export default Home;