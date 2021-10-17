import React from 'react';

import { StyledCell } from './Styles/StyledCell';
import { TETROMINOS } from '../tetrisminos';

console.log(TETROMINOS["L"])

const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMINOS[type].color} />
)

export default Cell;
