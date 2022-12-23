import React, { useEffect } from "react";
import { css, useTheme } from "@emotion/react";
import DefaultLayout from "../layouts/default";
import BrownText from './../components/browText';
import Title from "../components/Title";
import Number from "../components/number";
import Click from "../components/click";

export default function SelectPage1() {
    const theme = useTheme();        

    return(
        <DefaultLayout>  
            <div css = { css`height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;`}>      
                <div>
                <Title size = "1.125em" border={"2px"}></Title>
                <BrownText text ={["Q.해당 음식에 대한 선호도는 ?"]} size = "1.438rem"></BrownText>
                    <h1 css = {
                        css`
                            text-align : center;
                            font-family : big;
                            font-size : 2.6rem;
                            margin-top : 8px;
                        `
                    }>곱창</h1>
                    <div css = {css`
                    background-color :#FFF8B9;
                    width : 65vmin;
                    height : 65vmin;
                    `}>
                    <div>
                            <img src = "./../images/tteok">
                            </img>
                    </div>
                    </div>
                    <div css = {css`
                    display: flex;
                    flex-direction: verticle;
                    justify-content: space-around;
                    `}>
                    <Click text = "짱싫어" color = "#6B7FEA" ></Click>
                    <Click text = "싫어" color = "#000000" ></Click>
                    <Click text = "좋아" color = "#000000" ></Click>
                    <Click text = "짱좋아" color = "#EA6B7C" ></Click>
                    </div>
                </div>
                <Number int = "1" size ="1.25rem"></Number>
            </div>     
        </DefaultLayout>
    );
}