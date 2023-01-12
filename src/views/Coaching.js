/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Moreinfo from "../components/Moreinfo";

const Coaching = () => {
    const style = css`
        background-image: url("https://source.unsplash.com/random/?Fitness/");
        background-size: cover;
        padding: 5em 0;
    `

    return ( 
        <div css={style}>
            <Moreinfo title="Kostvejledning og coaching" text="en tekst om et eller andet" />
        </div>
     );
}
 
export default Coaching;