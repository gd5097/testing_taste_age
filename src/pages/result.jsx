import React from "react";
import { css } from "@emotion/react";

import DefaultLayout from "../layouts/default";
import Title from "../components/Title";
import AgeIndicator from "../components/age-indicator";
import { useNavigate } from "react-router-dom";

export default function ResultPage(){

    const cur_age = 30;
    const navigate = useNavigate();

    return(
        <DefaultLayout>
            <div
            // 전체 컨테이너
                css={css`
                    display: flex;
                    flex-direction: column;

                    justify-content:center;
                    align-items:center;
                `}
            >
                <div
                    css={css`
                        margin-top: 28px;
                    `}
                />                
                <Title size = "1.125em" border={"2px"}></Title>
                <div
                    css={css`
                        margin-top: 40px;
                    `}
                />
                
                {cur_age >= 50 && <AgeIndicator age={50}/>}           
                
                {(cur_age >= 40 && cur_age < 50) && <AgeIndicator age={40}/>}
                {(cur_age >= 30 && cur_age < 40) && <AgeIndicator age={30}/>}
                {(cur_age >= 20 && cur_age < 30) && <AgeIndicator age={20}/>}
                {(cur_age >= 10 && cur_age < 20) && <AgeIndicator age={10}/>}
            
                <button
                    onClick={() => {
                        navigate("/");
                    }}
                    css={css`
                        font-family: "big";
                        border: 0;
                        font-size: 1.125rem;
                        margin-top: 50px;

                        width: 156px;
                        height: 45px;
                        left: 57px;
                        top: 548px;
                        
                        color:  #907D5A;
                        background: #FFF8B9;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 20px;
                    `}
                >
                    다시하기
                </button>
            </div>
        </DefaultLayout>
    );

}