import React, { useEffect } from "react";
import { css, useTheme } from "@emotion/react";
import DefaultLayout from "../layouts/default";
import BrownText from './../components/browText';

export default function SelectPage1() {
    const theme = useTheme();        

    return(
        <DefaultLayout>  
            <div>
                <BrownText text ={"Q.해당 음식에 대한 선호도는 ?"} size = "1.438rem"></BrownText>
            </div>     
        </DefaultLayout>
    );
}