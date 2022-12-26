/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from "./Button";

const Infobox = () => {
    const style = css`
        text-align: center;
        background-image: url("https://source.unsplash.com/random/?Fitness/");
        background-size: cover;
        padding: 2em;
        color: white;
    `

    return ( 
        <section css={style}>
            <h1>This is something</h1>
            <p>text</p>
            <Button />
        </section>
     );
}
 
export default Infobox;