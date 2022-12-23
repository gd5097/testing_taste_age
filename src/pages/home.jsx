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
        <Title size = "3.75rem"/>
        <Button text = "테스트 시작하기" fontsize ="1.250rem"></Button>            
        </DefaultLayout>
    );
}