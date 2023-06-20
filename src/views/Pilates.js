/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Pilates = () => {

    const style = css`

    border-top: 0.5em solid #95c11f;
    background-image: url("../images/desktop.jpg");
    background-size: cover;
    background-position: top;
    padding-bottom: 5em;

    & h1 {
        text-align: center;
        padding: 1.5em 0;
        font-family: 'Vesper Libre', sans-serif;
    }

    & p {
        padding-bottom: 0.9em;
    }

    & li {
        list-style-type: none;
        padding-bottom: 0.9em;
    }

    & .flex {
        display: flex;
        gap: 3em;
        margin-bottom: 3em;

        & .image {
                flex:3;
            }

        & .text {
            flex:3;
        }

        & .cursive {
            font-size: small;
            font-style: italic;
        }

        & .listp {
            padding-bottom:0.2em;
        }
    }

@media only screen and (max-width: 700px) {
background-image: url("../images/mobile.jpg");
background-size: cover;
background-position: center;
padding: 0 2em 1em;

.flex {
        flex-direction: column;
        padding: 0 3em;
        gap:0;
    }
}
    
`
    return ( 
        <div css={style}>

        <h1>Pilates reformer</h1>

        <div className="maxwidth flex">

           <div className='image'>
                <img src="./images/pilates.jpg" alt="pilates bænke" />
           </div>

           <div className='text'>
                <p>
                    Pilates reformer bliver mere og mere populært, og med god grund. Det er en effektiv træningsmetode, hvor man får trænet kroppens muskler grundigt igennem, på en yderst tidseffektiv måde.
                </p>
                <p>
                    Flere fysioterapeuter er begyndt at anvende denne træningsform som et led i genoptræning af borgere, fordi det er så effektivt og samtidig skånsomt for ledene.
                </p>
                <p>
                    Det er dog godt for alle og du behøver ikke have skader og skavanker for at Pilates reformer vil være godt for dig. Mange af kroppens muskler kan let blive overset ved traditionel styrketræning, men de slipper altså ikke så let ved denne træningsform.
                </p>
                <p>
                    Vi tager udgankspunkt i traditionel Pilates reformer og undervisningen byder på følgende:
                </p>

                <ul>
                    <li>
                        ⦁ Full body workout - med fokus på de stabiliserende og dybe muskler.
                    </li>
                    <li>
                        ⦁ Hård, men hensigtsmæssig træning - undgå skader, samtidig med at du bliver stærkere.
                    </li>
                    <li>
                        <p className='listp'>
                            ⦁ Fokus på bevægemønstre - forbedrer din holdning og din generelle måde at bruge din krop på.
                        </p>
                        <p className='cursive'>
                            - Hvilket kan forebygge, og i nogle tilfælde behandle skader. Spændingshovedpine, impingement i skulderen og lændesmerter eksempelvist.
                        </p>
                    </li>
                    <li>
                        <p className='listp'>
                            ⦁ Helt private omgivelser og hvor du er 100 % i fokus, og kan have træne helt uforstyrret. 
                        </p>
                        <p className='cursive'>
                            - Foretrækker du at træne sammen med nogen, har du mulighed for at dele rampelyset med en træningspartner du selv medbringer.
                        </p>
                    </li>
                </ul>
           </div>
        </div>
       

    </div>
     );
}
 
export default Pilates;