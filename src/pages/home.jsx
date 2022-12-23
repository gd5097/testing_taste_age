import React, { useEffect } from "react";
import { css, useTheme } from "@emotion/react";
import DefaultLayout from "../layouts/default";

import HelloWorld from "../components/hello-world";

export default function HomePage() {
    const theme = useTheme();

    
    useEffect(() => {
        console.log("Test");
    });

    return(
        <DefaultLayout>
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
        </DefaultLayout>
    );
}