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

        & li {
            padding-bottom:1em;
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
    `
    return ( 
        <div css={style}>
                <h1>Priser og forløb:</h1>

            <div className='info'>
                <div className='image'>
                    <img src="placeholderimg.jpg" alt="placeholder" />
                </div>
                <div className='text'>
                    <ul>
                        <li>Lægekonsultation ved opstart af medicnisk behandling 999,-</li>
                        <li>Medicinsk forløb, pr. måned 249,-</li>
                        <li>
                            <p>Medicinsk forløb med personligt træning ved fremmøde</p> 
                            <p>⦁ 1 træning om ugen 2.699,-</p> 
                            <p>⦁ 2 træninger om ugen (Anbefalet) 4.199,-</p> 
                            <p>⦁ 3 træninger om ugen 5.999,-</p>
                        </li>
                        <li>Medicinsk behandling med online forløb 999,-</li>
                        <li>
                            <p>Personligt træningsforløb med fremmøde</p>
                            <p>⦁ 1 træning om ugen 2.499</p>
                            <p>⦁ 2 træninger om ugen 3.999</p>
                            <p>⦁ 3 træninger om ugen 5.799</p>
                        </li>
                        <li>Online forløb 799,-</li>
                    </ul>
                </div>
            </div>

                <Divider text="Vi gør opmærksom på at priserne er uden medicinen." list="Sygeforsikring Danmark giver tilskud på den medicinske behandling, 25-50% afhængig af om man er medlem af gruppe 1,2 eller 5." />
            </div>
     );
}
 
export default Priser;