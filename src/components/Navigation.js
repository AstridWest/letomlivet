/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const style = css`

        display:flex;
        justify-content: space-between;
        align-items: end;

        & div {
            max-width: 9em;
        }

        & ul {

            display: flex;

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

            <div>
                <img src="logo.png" alt="logo" />
            </div>
            
            <ul>
                <Link to="/"><li>Forside</li></Link>
                <Link to="/træning"><li>Personlig træning</li></Link>
                <Link to="/coaching"><li>Kostvejledning og coaching</li></Link>
                <Link to="/fysioterapi"><li>Fysioterapi</li></Link>
                <Link to="/vægttab"><li>Medicinsk vægtab</li></Link>
            </ul>
        </nav>
     );
}
 
export default Navigation;