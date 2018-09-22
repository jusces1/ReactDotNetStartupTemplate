import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Sidebar } from "semantic-ui-react";

//import './NavMenu.css';

export default props => (
    <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
        <Menu.Item as={Link} to={'/counter'}>Counter
      </Menu.Item>
        <Menu.Item as={Link} to={'/fetchdata'}>Fetch data
      </Menu.Item>
    </Sidebar>
);
