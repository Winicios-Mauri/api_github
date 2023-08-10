import React from "react";
import PropTypes from "prop-types";
import * as C from './styles';

function Filter({ languages, currentLaguange, onClick }) {
  const selectors = languages.map(({ name, count, color }) => (
    <C.Selector
      key={name.toLowerCase()}
      color={color}
      className={currentLaguange === name ? 'selected' : ''}
      onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </C.Selector>
  ));

  return (
    <C.Container>
      {selectors}
      <C.Cleaner onClick={() => onClick && onClick(undefined)}>Limpar</C.Cleaner>
    </C.Container>
  )
}

Filter.defaultProps = {
  currentLaguange: null,
  onClick: null,
}

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLaguange: PropTypes.string,
  onClick: PropTypes.func,
};

export default Filter;
