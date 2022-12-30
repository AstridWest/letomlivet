/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from "./Button";

const Infobox = ({title, description}) => {
    const style = css`
        text-align: center;
        background-image: url("https://source.unsplash.com/random/?Fitness/");
        background-size: cover;
        padding: 2em;
        color: white;
        margin-bottom: 1em;
    `

    return ( 
        <section css={style}>
            <h1>{title}</h1>
            <p>{description}</p>
            <Button />
        </section>
     );
}
 
export default Infobox;