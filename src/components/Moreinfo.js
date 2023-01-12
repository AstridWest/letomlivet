/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Moreinfo = ({title, text}) => {

    const style = css`
        text-align: center;
        background-color: rgba(255, 255, 255, 0.70);
        width:50%;
        margin: 0 auto;
        padding: 4em;
    `

    return ( 
        <section css={style}>
            <h1>{title}</h1>
            <p>{text}</p>
        </section>
     );
}
 
export default Moreinfo;