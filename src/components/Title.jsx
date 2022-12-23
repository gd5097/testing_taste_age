import React from 'react';
import { css } from '@emotion/react';
import { useEffect } from 'react';

export default function Title ({size, border}) {
    return(
        <div  
            css={css`
                font-family: big;
                font-size : ${size};
                text-align : center;
                color : #FFF8B9;
                text-shadow: -${border} 0 #907D5A, 0 ${border} #907D5A, ${border} 0 #907D5A, 0 -${border} #907D5A;
                margin-bottom : 10%;
                margin-top : 5px;
        `}>
            입맛나이
            <br></br>
            테스트
        </div>
    );
}

