import HeaderArea from './HeaderStyled';
import {  Link } from 'react-router-dom';

function Header(){
    return(
        <HeaderArea>
            <div className="container">
                <img src='../../../images/digimon-logo.png' alt="logo"/>
                <nav>
                    <ul>
                        <li><Link to="/">Encontre o seu Digimon</Link></li>
                        <li><Link to="/digimons">Digimons</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    )
}

export default Header;