/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Navigation from "./Navigation";

const Header = () => {

    const style = css`

        & .topimage {
            background-image: url("placeholderimg.jpg");
            background-size: cover;
            padding: 8em 1em;
        }

@media only screen and (max-width: 500px) {
    .topimage {
        padding: 3em 1em;
    }
}
`

    return ( 
        <>
        <header css={style}>
            <div className='topimage'></div>
            <Navigation />
        </header>
        </>
        
     );
}
 
export default Header;