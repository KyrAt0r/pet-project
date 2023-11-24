import {BrowserRouter as Router} from 'react-router-dom';

import Header from "../../pet-project/src/components/Header/Header";
import MainMenu from "../../pet-project/src/components/MainMenu/MainMenu";
import Footer from "../../pet-project/src/components/Footer/Footer";
import logo from '../../pet-project/src/assets/logoMimic.gif';
import './styles.css';
import Routes from "../../pet-project/src/components/Routes";
function App() {
    const menuItems = [ // Обёрнуто в JSON обьект для передачи в пропсыы
        {title: 'Главная', link: '/', id: '0'},
        {title: 'Новости', link: '/news', id: '1'},
        {title: 'О нас', link: '/about', id: '2'},
        {title: 'Контакты', link: '/functional', id: '3'},
        {title: 'Посты', link: '/feed', id: '4'},
    ];

    return (
        <Router>
            <div className="App">
                <Header logoSrc={logo} siteName="ИПР React + TypeScript"/>
                <MainMenu menuItems={menuItems}/>
                <Routes/>
                <Footer/>
            </div>
        </Router>
    );
}
export default App
