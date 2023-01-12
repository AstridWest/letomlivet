/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Navigation from "./Navigation";

const Header = () => {

    const style = css`
        background-image: url("placeholderimg.jpg");
        background-size: cover;
        padding: 4em 1em;
    `

    return ( 
        <header css={style}>
            <Navigation />
        </header>
     );
}
 
export default Header;