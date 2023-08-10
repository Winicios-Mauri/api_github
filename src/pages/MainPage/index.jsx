import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

import * as C from './styles';

import githublogo from "../../assets/images/github-logo.svg";

function MainPage() {
  const [ login, setLogin ] = useState('');

  return (
    <C.Container>
      <C.Logo src={githublogo} alt="API GitHub" />
      <C.Title>API GITHUB</C.Title>
      <C.Form>
        <C.Input placeholder="Usuário" value={login} onChange={(event) => setLogin(event.target.value)}/>
        <C.Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </C.Button>
      </C.Form>
    </C.Container>
  )
}

export default MainPage;
