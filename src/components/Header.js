/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Navigation from "./Navigation";

const Header = () => {

    const style = css`
        background-image: url("placeholderimg.jpg");
        background-size: cover;
        padding: 2em;
    `

    return ( 
        <header css={style}>
            <Navigation />
        </header>
     );
}
 
export default Header;