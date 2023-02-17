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
                    font-family: 'Source Sans Pro', sans-serif;
                } 
            & li:hover{
                color: #95c11f;
            }
        }

@media only screen and (max-width: 700px) {

  li {
    font-size: 0.9em;
  }

  .logo {
            font-size: 0.5em;
            padding: 0 1em;
        }
}


@media only screen and (max-width: 550px) {
  li {
    font-size: 0.7em;
  }

  .logo {
            font-size: 0.4em;
            padding: 0 1em;
        }
}

@media only screen and (max-width: 420px) {
  li {
    font-size: 0.6em;
  }

  .logo {
            font-size: 0.3em;
            padding: 0 1em;
        }
}

@media only screen and (max-width: 420px) {
  li {
    font-size: 0.3em;
  }

  .logo {
            font-size: 0.2em;
            padding: 0 1em;
        }
}
`

    return ( 
        <nav css={style}>

            <div className='logo'>
                <img src="./images/logo.png" alt="Let om livet logo" />
            </div>
            
            <ul className='navigation'>
                <Link to="/"><li>Forside</li></Link>
                <Link to="vægttab"><li>Vægttabs medicin</li></Link>
                {/* <Link to="/Fysioterapi"><li>Fysioterapi</li></Link> */}
                <Link to="træning"><li>Personlig træning</li></Link>
                <Link to="Priser"><li>Forløb og priser</li></Link>
            </ul>
        </nav>
     );
}
 
export default Navigation;