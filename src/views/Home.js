/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from "../components/Header";
import Infobox from "../components/Infobox";

const Home = () => {

    const style = css`
        text-align: center;
        padding: 5em;
    `

    return ( 
        <>
        <Header />

        <div css={style}>
            <h1>En lille titel</h1>
            <p>Lidt text om noget og måske et lille billede ved siden af teksten</p>
        </div>
            
        <Infobox />
        </>
     );
}
 
export default Home;