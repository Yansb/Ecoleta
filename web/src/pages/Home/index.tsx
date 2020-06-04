import React from 'react';

import {FiLogIn} from 'react-icons/fi';
import {Content, Main} from './styles';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Home = () =>{
  return(
    <Main>
      <Content>
        <header>
          <img src={logo} alt="Ecoleta"/>
        </header>
        <main>
          <h1>Seu marketplace de coleta de resíduos</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
          <Link to="/create-point">
            <span><FiLogIn/></span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>

        </main>


      </Content>
    </Main>
  )
}

export default Home;