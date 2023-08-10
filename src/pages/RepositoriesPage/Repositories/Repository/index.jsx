import React from "react";
import PropTypes from "prop-types";

import * as C from './styles';
import { LangColors } from "../../../../services/config";

function Repository({ repository }) {
  const color = LangColors[repository.language && repository.language.toLowerCase()];

  return (
    <C.Container color={color}>
      <C.Name>{repository.name}</C.Name>
      <C.Description>{repository.description}</C.Description>
      <C.Footer color={color}>
        <C.Lang>{repository.language}</C.Lang>
        <C.Link href={repository.html_url} target="_blank">Ver +</C.Link>
      </C.Footer>
    </C.Container>
  )
}

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired
}

export default Repository;
