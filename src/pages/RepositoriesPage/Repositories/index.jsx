import React from "react";
import PropTypes from "prop-types";

import Repository from "./Repository";

import * as C from './styles';

function Repositories({ repositories, currentLaguange }) {

  const repos = repositories
    .filter((repository) => currentLaguange === undefined || repository.language === currentLaguange)
    .map((repository) => (
      <Repository key={repository.id} repository={repository} />
    ));

  return (
    <C.Container>{repos}</C.Container>
  )
}

Repositories.defaultProps = {
  currentLaguange: undefined,
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLaguange: PropTypes.string,
}

export default Repositories;
