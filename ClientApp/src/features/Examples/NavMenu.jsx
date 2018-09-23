import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Sidebar } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

//import './NavMenu.css';

export default props => (
    <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
    <Menu.Item as={Link} to={'/counter'}> <FormattedMessage
        id="nav.counter"
        defaultMessage="Skaičiuoklė"
      />
      </Menu.Item>
    <Menu.Item as={Link} to={'/fetchdata'}><FormattedMessage
        id="nav.fetchData"
        defaultMessage="Duomenys iš C#"
      />
      </Menu.Item>
    </Sidebar>
);
