/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Infobox = ({title, description}) => {
    const style = css`
        color: white;
    `

    return ( 
        <section css={style}>
            <h1>{title}</h1>
            <p>{description}</p>
        </section>
     );
}
 
export default Infobox;