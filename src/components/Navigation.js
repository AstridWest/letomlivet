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
        }
    
        

`

    return ( 
        <nav css={style}>

            <div>
                <img src="logo.png" alt="logo" />
            </div>
            
            <ul>
                <Link to="/"><li>Forside</li></Link>
                <Link to="/"><li>Noget</li></Link>
                <Link to="/"><li>Noget</li></Link>
                <Link to="/"><li>Noget</li></Link>
            </ul>
        </nav>
     );
}
 
export default Navigation;