import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) => {

  const Icon = styled.img`
    width: 40%;
  `

  return (
    <Icon className='icon' src="" alt="weather icon" />
  )
}

export default Icon;