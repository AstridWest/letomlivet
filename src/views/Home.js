/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Infobox from "../components/Infobox";

const Home = () => {

    const style = css`
        text-align: center;
        padding: 5em;
    `

    return ( 
        <>
            <div css={style}>
                <h1>En lille titel</h1>
                <p>Lidt text om noget og måske et lille billede ved siden af teksten</p>
            </div>
                
            <Infobox title="Personlig træning" description="bla bla bla" />
            <Infobox title="Kostvejledning og coaching" description="bla bla bla" />
            <Infobox title="Fysioterapi" description="bla bla bla" />
            <Infobox title="Medicinsk vægtab" description="bla bla bla" />
        </>
     );
}
 
export default Home;