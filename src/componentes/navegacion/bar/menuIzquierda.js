import { ListItem, List, ListItemText, Divider } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

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
            <ListItem component={Link} button to="/auth/pagprincipal">
                <i className="material-icons">settings_suggest</i>
                <ListItemText classes={{primary : classes.listItemText}} primary="Mantenimiento"/>
            </ListItem>
            <ListItem component={Link} button to="/auth/pagprincipal">
                <i className="material-icons">support_agent</i>
                <ListItemText classes={{primary : classes.listItemText}} primary="Mantenimiento Usuario"/>
            </ListItem>
        </List>
    </div>
);