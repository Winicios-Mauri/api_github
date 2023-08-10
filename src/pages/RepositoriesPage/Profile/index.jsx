import React from "react";

import PropTypes from "prop-types";

import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

import * as C from './styles';

function Profile({ user }) {

  return (
    <C.Container>
      <C.Header>
        <C.Avatar src={user.avatar_url} />
        <C.Login>{user.login}</C.Login>
        <C.Name>{user.name}</C.Name>
      </C.Header>
      <C.Inner>
        <C.Data>
          <MdGroup size={20} />
          {user.following}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;{user.followers}&nbsp;<i>seguindo</i>
        </C.Data>
        {user.company && (
          <C.Data>
            <MdWork size={20} />
            {user.company}
          </C.Data>
        )}
        {user.location && (
          <C.Data>
            <MdLocationCity size={20} />
            {user.location}
          </C.Data>
        )}
        <C.Data>
          <MdLink size={20} />
          <a href={`\\${user.blog}`}>{user.blog}</a>
        </C.Data>
      </C.Inner>
    </C.Container>
  )
}

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    blog: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
