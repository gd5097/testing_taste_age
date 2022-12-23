import React from "react";
import { css } from "@emotion/react";
import DefaultLayout from "../layouts/default";

export default function ResultPage(){
    return(
        <DefaultLayout>
            <div
            // 전체 컨테이너
                css={css`
                    display: flex;
                    direction: column;
                `}
            >

            </div>
        </DefaultLayout>
    );

}