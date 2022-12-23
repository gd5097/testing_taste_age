import React from 'react';
import { css } from '@emotion/react';

const Button = ({text, fontsize, paddingsize }) => {
    return(
    <button css = { css`
        border: none;
        color: #907D5A;
        padding: ${paddingsize};
        background-color: #FFF8B9;
        text-align: center;
        text-decoration: none;
        font-size: ${fontsize};
        border-radius: 14px;
    `}>
        {text}
    </button>
    );
}

export default Button;