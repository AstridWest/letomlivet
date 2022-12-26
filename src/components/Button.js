/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Button = () => {

    const style = css`
        background-color: #95c11f;
        border: none;
        border-radius: 3px;
        color: white;
        padding:0.2em 3em;
    `

    return ( 
        <button css={style}>
            <p>mere info</p>
        </button>
     );
}
 
export default Button;