import React, { useEffect } from "react";
import { css, useTheme } from "@emotion/react";
import DefaultLayout from "../layouts/default";

import HelloWorld from "../components/hello-world";
import Title from '../components/Title';
import Button from "../components/button";

export default function HomePage() {
    const theme = useTheme();

    
    useEffect(() => {
        console.log("Test");
    });

    return(
        <DefaultLayout>
<<<<<<< HEAD
        <Title size = "3.75rem"/>
        <Button text = "테스트 시작하기" fontsize ="1.250rem"></Button>            
=======
            <div
                css={css`
                    width: 100px;
                    height: 100px;

                    background-color: white;

                    font-size: 3rem;
                    font-family: "small";
                `}
            >
                가나다라
            </div>
            <div
                css={css`
                    width: 150px;
                    height: 150px;

                    background-color: cyan;

                    font-size: 3rem;
                    font-family: "big";
                `}
            >
                마바사아
            </div>
            <HelloWorld />            
>>>>>>> 8175a36b674933bed6777eebace6e83bf23d0b0c
        </DefaultLayout>
    );
}