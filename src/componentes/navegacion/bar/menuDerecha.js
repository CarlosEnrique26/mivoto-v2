import { List, ListItem, ListItemText, Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom"

export const MenuDerecha = ({
    classes,
    usuario,
    salirSesion,
    iniciarSesion
}) => (
    <div className={classes.list}>
        <List>
            <ListItem button onClick={iniciarSesion}>
                <Avatar/>
                <ListItemText classes={{primary : classes.listItemText}} primary= "Usuario"/>
            </ListItem>
            <ListItem button onClick={salirSesion}>
                <ListItemText classes={{primary : classes.listItemText}} primary= "salir"/>
            </ListItem>
        </List>
    </div>
)