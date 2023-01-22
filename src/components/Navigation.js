/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const style = css`
        display:flex;
        justify-content: space-between;
        align-items: top;

        & .logo {
            max-width: 15em;
            padding: 0 1em;
        }

        & ul {
            display: flex;
            padding-top: 1em;

            & li {
                    list-style-type: none;
                    padding-right: 2em;
                } 
            & li:hover{
                color: #95c11f;
            }
        }
`

    return ( 
        <nav css={style}>

            <div className='logo'>
                <img src="logo.png" alt="Let om livet logo" />
            </div>
            
            <ul className=''>
                <Link to="/"><li>Forside</li></Link>
                <Link to="/vægttab"><li>Læge konsultation og vægttabs medicin</li></Link>
                <Link to="/træning"><li>Personlig træning</li></Link>
                <Link to="/Fysioterapi"><li>Fysioterapi</li></Link>
            </ul>
        </nav>
     );
}
 
export default Navigation;