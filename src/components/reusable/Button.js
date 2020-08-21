import React from 'react';
import styled from 'styled-components';

const AddButton = styled.button`
  background: none;
  border: 2px #7d8a2e solid;
  color: #7d8a2e;
  border-radius: 64px;
  padding: 5px 10px;
  font-weight: 700;
  cursor: pointer;
  float: right;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  float: ${(props) => (props.right ? 'right' : 'left')};
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export default ({ handleClick, direction, title }) => (
  <AddButton direction={direction} onClick={handleClick}>
    {' '}
    {title}{' '}
  </AddButton>
);
