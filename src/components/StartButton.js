import React from 'react';
import '../App.css';
import { StyledStartButton } from './Styles/StyledStartButton';

const StartButton = ({ callback }) => (
    <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
)
export default StartButton