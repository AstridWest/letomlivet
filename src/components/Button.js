/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Button = () => {

    const style = css`
        background-color: #95c11f;
        border: none;
        border-radius: 3px;
        color: white;
        padding:0.2em 3em;

        & p:hover{
            color:black;
        }
    `

    return ( 
        
            <button css={style}>
                <p>Mere info</p>
            </button>
     );
}
 
export default Button;