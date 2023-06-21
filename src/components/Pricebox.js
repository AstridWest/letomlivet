/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const Pricebox = ({toptitle, topprice, secondtitle, secondprice, thirdtitle, thirdprice, fourthprice, fourthtitle}) => {
    const style = css`
        background-color: #F6F9EE;
        border-radius: 1em;
        width: 300px;
        margin: 0 auto;
        text-align: center;
        padding:3em 2em 2em;
        display: flex;
        flex-direction: column;
        box-shadow: 5px 4px 5px 2px #F0F0F0;
        font-size: 1.2em;

        & h4 {
            padding-bottom: 1em;
        }
    `

    return ( 
        <div css={style}>

            <p>{toptitle}</p>
            <h4>{topprice}</h4>

            <p>{secondtitle}</p>
            <h4>{secondprice}</h4>

            <p>{thirdtitle}</p>
            <h4>{thirdprice}</h4>

            <p>{fourthtitle}</p>
            <h4>{fourthprice}</h4>

        </div>
     );
}
 
export default Pricebox;