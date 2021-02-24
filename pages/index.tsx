import React from 'react';
import {Button} from '@material-ui/core';

const Index = () => {
    return (
        <>
        <div className='center' >
            <h1>Music app </h1>
            <h3>The best tracks here!</h3>
            <Button variant={'outlined'} >Button</Button>
        </div>
            <style jsx >
                {`
                .center {
                margin-top: 150px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                `}
            </style>
            </>
    );
};

export default Index;
