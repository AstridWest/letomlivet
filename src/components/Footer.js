/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IoLogoFacebook } from 'react-icons/io5';

const Footer = () => {

    const style = css`
        background-color: grey;
        color: white;
        padding: 2em 1em;
        display: flex;
        justify-content: space-around;

        h3 {
                padding-bottom: 0.5em;
            }

        & .socials{
            text-align: end;

            & a {
                color: white;
            }

            & div {
                padding-bottom: 0.5em;
            }
        }
    `

    return ( 
        <footer css={style}>

            <div className='contact'>
                <h3>Kontakt os på</h3>
                <p>Email: kontakt@letomlivet.com</p>
            </div>

            <div className='socials'>
                <h3>Følg os på</h3>

                <div>
                    <a href="https://www.facebook.com/profile.php?id=100089497236822" target="_blank" rel="noreferrer noopener" className='facebookicon'>
                        <IoLogoFacebook />
                    </a> 
                </div>
                         
                <a href="https://www.facebook.com/groups/490514576341747" target="_blank" rel="noreferrer noopener">Bliv en del af gruppen og få svar på dine spørgsmål</a>
            </div>
        </footer>
     );
}
 
export default Footer;