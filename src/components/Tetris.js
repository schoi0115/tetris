import React from 'react';
import '../App.css'
import { createStage } from '../gameHelper'

import Stage from './Stage'
import Display from './Display';
import StartButton from './StartButton';
import { StyledTetrisWrapper, StyledTetris } from './Styles/StyledTetris';

const Tetris = () => {
console.log(createStage())
    return(
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Row" />
                    <Display text="Level" />
                </div>
                <StartButton />

            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>

    )
}

export default Tetris