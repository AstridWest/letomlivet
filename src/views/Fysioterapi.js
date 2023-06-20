/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Fysioterapi = () => {
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

    p {
        padding-bottom: 1em;
    }

    @media only screen and (max-width: 700px) {
    background-image: url("../images/mobile.jpg");
    background-size: cover;
    background-position: center;
    padding: 0 2em 1em;
}
        
`

    return ( 
        <div css={style}>

            <h1>Fysioterapi</h1>

            <div className="maxwidth">
                <p>
                    Vores fysioterapeut, Stasa, er uddannet i 2014, med speciale i genoptræning. 
                </p>
                <p>
                    For ham er det vigtigt, at han i samarbejde med klienten, finder årsagen til smerterne og ikke kun fokuserer på symptomerne.
                </p>
                
                <p>
                    Han har meget erfaring og gennem sit kendskab til skadessammenhæng undersøger, tilrettelægger og instruerer han i træningsøvelser, som både kan afhjælpe problemet, og medvirke til at sikre, at problemet ikke vender tilbage. Han tilbyder ligeledes manuel behandling, ved behov.
                </p>
                <p>
                    Stasa brænder for sit fag og er ambitiøs på fagets og egne vegne - og det kan man tydeligt mærke som klienten. Han prioterer evidensbaseret praksis og i særdeleshed god til komminukation og samarbejde.
                </p> 
            </div>
           

        </div>
     );
}
 
export default Fysioterapi;