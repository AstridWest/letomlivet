/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Moreinfo from "../components/Moreinfo";

const Fysioterapi = () => {
    const style = css`
        background-image: url("https://source.unsplash.com/random/?Fitness/");
        background-size: cover;
        padding: 5em 0;
    `

    return ( 
        <div css={style}>
            <Moreinfo title="Fysioterapi" text="en tekst om et eller andet" />
        </div>
     );
}
 
export default Fysioterapi;