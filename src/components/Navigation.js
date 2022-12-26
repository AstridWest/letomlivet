/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const style = css`

        & div {
            max-width: 7em;
        }
    
        & li {
                list-style-type: none;
            }

`

    return ( 
        <nav css={style}>

            <div>
                <img src="logo.png" alt="logo" />
            </div>
            
            <ul>
                <Link to="/"><li>Forside</li></Link>
            </ul>
        </nav>
     );
}
 
export default Navigation;