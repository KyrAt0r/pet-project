import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IMenuProps } from '../../interface/IMenuProps';

import './MainMenu.css';

class MainMenu extends Component<IMenuProps> {
    render() {
        const { menuItems } = this.props;

        return (
            <nav className="menu">
                <ul className="menu__list">
                    {menuItems.map(item => (
                        <li key={item.id} className="menu__item">
                            <NavLink
                                exact
                                to={`${import.meta.env.BASE_URL}${item.link}`}
                                className="menu__link"
                                activeClassName="active"
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default MainMenu;
