/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const Pricebox = ({toptitle, topprice, secondtitle, secondprice, thirdtitle, thirdprice, fourthprice, fourthtitle}) => {
    const style = css`
        border: solid 1px black;
        width: 300px;
        margin: 0 auto;
        text-align: center;
        padding:2em;
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