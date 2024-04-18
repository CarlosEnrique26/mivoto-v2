import { ListItem, List, ListItemText, Divider } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const MenuIzquierda = ({classes}) => (
    <div className={classes.list}>
        <List>
            <ListItem component={Link} button to="/auth/profileuser">
                <i className="material-icons">account_box</i>
                <ListItemText classes={{primary : classes.listItemText}} primary="Perfil"/>
            </ListItem>
        </List>
        <Divider/>
        <List>
            <ListItem component={Link} button to="/auth/pagprincipal">
                <i className='material-icons'>home</i>
                <ListItemText classes={{primary : classes.listItemText}} primary="Inicio" />
            </ListItem>
            <ListItem component={Link} button to="/auth/mail">
                <i className='material-icons'>mail</i>
                <ListItemText classes={{primary : classes.listItemText}} primary="Mail" />
            </ListItem>
            <ListItem component={Link} button to="/auth/listpreregister">
                <i className="material-icons">menu_book</i>
                <ListItemText classes={{primary : classes.listItemText}} primary="Pre Registro"/>
            </ListItem>
        </List>
            <Divider/>
        <List>    
            <ListItem>
                <i className="material-icons">settings_suggest</i>
                <ListItemText classes={{primary : classes.listItemText}} primary="Mantenimiento"/>
            </ListItem>
            <ListItem component={Link} button to="/auth/empresas">
                <ChevronRightIcon></ChevronRightIcon>
                <ListItemText classes={{primary : classes.listItemText}} primary="Empresas"/>
            </ListItem>
            <ListItem component={Link} button to="/auth/votaciones">
                <ChevronRightIcon></ChevronRightIcon>
                <ListItemText classes={{primary : classes.listItemText}} primary="Votaciones"/>
            </ListItem>
            <ListItem component={Link} button to="/auth/email">
                <ChevronRightIcon></ChevronRightIcon>
                <ListItemText classes={{primary : classes.listItemText}} primary="Email"/>
            </ListItem>
            <ListItem component={Link} button to="/auth/sonido">
                <ChevronRightIcon></ChevronRightIcon>
                <ListItemText classes={{primary : classes.listItemText}} primary="Sonido"/>
            </ListItem>
        </List>
            <Divider/>
        <List>
            <ListItem>
                <i className="material-icons">support_agent</i>
                <ListItemText classes={{primary : classes.listItemText}} primary="Mantenimiento Usuario"/>
            </ListItem>
            <ListItem component={Link} button to="/auth/usuario">
                <ChevronRightIcon></ChevronRightIcon>
                <ListItemText classes={{primary : classes.listItemText}} primary="Usuarios"/>
            </ListItem>
            <ListItem component={Link} button to="/auth/perfiles">
                <ChevronRightIcon></ChevronRightIcon>
                <ListItemText classes={{primary : classes.listItemText}} primary="Perfiles"/>
            </ListItem>
            <ListItem component={Link} button to="/auth/roles">
                <ChevronRightIcon></ChevronRightIcon>
                <ListItemText classes={{primary : classes.listItemText}} primary="Roles"/>
            </ListItem>
        </List>
    </div>
);