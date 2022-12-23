import React from 'react';
import { css } from '@emotion/react';
import { useEffect } from 'react';

export default function Title ({size}) {
    return(
        <div  
            css={css`
                font-size : ${size};
                text-align : center;
                color : #FFF8B9;
                text-shadow: -1px 0 #907D5A, 0 1px #907D5A, 1px 0 #907D5A, 0 -1px #907D5A;
        `}>
            입맛나이
            <br></br>
            테스트
        </div>
    );
}

