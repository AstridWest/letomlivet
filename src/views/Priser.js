/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Divider from "../components/Divider";

const Priser = () => {
    const style = css`
        border-top: 0.5em solid #95c11f;

        & h1 {
            text-align: center;
            padding: 1.5em 0;
        }

        & ul {
            padding-bottom: 1em;
        }

        & li {
            padding-bottom:1em;
            list-style-type: none;
            display: flex;
            justify-content: space-between;
        }

        & .info {
            padding: 0 10em;
            display: flex;
            gap: 3em;
            margin-bottom: 5em;

            & .image {
                flex:1;
            }

            & .text {
                flex:1;
            }
        }

        & .gørsomjegsiger{
            padding-bottom: 0.5em;
        }

@media only screen and (max-width: 500px) {
    .info {
        flex-direction: column;
        padding: 0 3em;
        gap:0;
    }

    .test {
        flex-direction: column-reverse;
    }
  
}
    `
    return ( 
        <div css={style}>
                <h1>Priser og forløb:</h1>

            <div className='info'>
                <div className='image'>
                    <img src="payment.jpg" alt="en gruppe der går sammen" />
                </div>
                
                <div className='text'>
                    <ul>
                        <li><p>◊ Lægekonsultation ved opstart af medicnisk behandling</p><p>999,-</p></li>
                        <li><p>◊ Medicinsk forløb, pr. måned</p> <p>249,-</p> </li>
                    </ul>
                    <ul>
                        <p className='gørsomjegsiger'>Medicinsk forløb med personligt træning ved fremmøde, pr. måned</p>
                        <li><p>◊ 1 træning om ugen</p><p>2.699,-</p></li>
                        <li><p>◊ 2 træninger om ugen (Anbefalet)</p><p>4.199,-</p></li>
                        <li><p>◊ 3 træning om ugen</p><p>5.999,-</p></li>
                    </ul>
                    <ul>
                        <li><p>◊ Medicinsk behandling med online forløb, pr. måned</p><p>999,-</p></li>
                    </ul>
                    <ul>
                        <p className='gørsomjegsiger'>Personligt træningsforløb med fremmøde, pr. måned</p>
                        <li><p>◊ 1 træning om ugen</p><p>2.499,-</p></li>
                        <li><p>◊ 2 træninger om ugen</p><p>3.999,-</p></li>
                        <li><p>◊ 3 træning om ugen</p><p>5.799,-</p></li>
                    </ul>
                    <ul>
                    <li><p>◊ Online forløb, pr. måned</p><p>799,-</p></li>
                    </ul>
                </div>
            </div>

                <Divider text="Vi gør opmærksom på at priserne er uden medicinen." list="Sygeforsikring Danmark giver tilskud på den medicinske behandling, 25-50% afhængig af om man er medlem af gruppe 1,2 eller 5." />
            </div>
     );
}
 
export default Priser;