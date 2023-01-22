/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Footer = () => {

    const style = css`
        background-color: grey;
        color: white;
        padding: 0 1em;
        display: flex;
        justify-content: space-around;
    `

    return ( 
        <footer css={style}>
            <p>kontakt os på</p>

            <div>
                <p>facebook link logo</p>
                <p>insta link logo</p>
                <p>link logo</p>
            </div>
        </footer>
     );
}
 
export default Footer;