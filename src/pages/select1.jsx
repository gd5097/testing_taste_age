import React, { useEffect } from "react";
import { css, useTheme } from "@emotion/react";
import DefaultLayout from "../layouts/default";
import BrownText from './../components/browText';
import Title from "../components/Title";
import Number from "../components/number";
export default function SelectPage1() {
    const theme = useTheme();        

    return(
        <DefaultLayout>  
            <div  css = { css`height: 100vh;
                display: flex;
                flex-direction: column;

                justify-content: space-around;
                align-items: center;`}>      
                <Title size = "1.125em" border={"2px"}></Title>
                <div>
                <BrownText text ={["Q.해당 음식에 대한 선호도는 ?"]} size = "1.438rem"></BrownText>
                    <h1 css = {
                        css`
                            text-align : center;
                            font-family : big;
                            font-size : 2.6rem;
                        `
                    }>곱창</h1>
                    <div css = {css`
                    background-color :#FFF8B9;
                    width : 65vmin;
                    height : 65vmin;
                    `}>
                    </div>
                </div>
                <Number int = "1" size ="1.25rem"/>
            </div>     
        </DefaultLayout>
    );
}