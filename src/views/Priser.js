/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ContactUs } from '../components/ContactUs';

import Divider from "../components/Divider";
import Pricebox from '../components/Pricebox';

const Priser = () => {
    const style = css`
        border-top: 0.5em solid #95c11f;
        background-image: url("../images/desktop.jpg");
        background-size: cover;
        background-position: top;

        & h1 {
            text-align: center;
            padding: 1.5em 0;
            font-family: 'Vesper Libre', sans-serif;
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
            max-width: 700px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            row-gap: 5em;
            padding-bottom:3em;
        }

        & .titler{
            padding-bottom: 0.5em;
        }
    
    & .mail {
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding: 0 1em 5em;
        margin-top: 3em;
    }

@media only screen and (max-width: 750px) {
    background-image: url("../images/mobile.jpg");
    background-size: cover;
    background-position: center;

    & .info {
        grid-template-columns: 1fr;
        padding:0 2em 3em;
    }
  
}
    `
    return ( 
        <div css={style}>
            <h1>Priser og forløb:</h1>

            <div className="maxwidth">

                <div className='info'>

                    <Pricebox toptitle="Lægekonsultation ved opstart af medicnisk behandling" topprice="999,-" secondtitle="Medicinsk forløb pr. måned" secondprice="249,-"  />
                    
                    <Pricebox toptitle="Online forløb" topprice="799,-" secondtitle="Med medicinsk forløb" secondprice="999,-" />

                    <Pricebox toptitle="Personligtræning 60min" topprice="549,-"/>

                    <Pricebox toptitle="Klippekort 10klip" topprice="5.090,-" secondtitle="20klip" secondprice="9.999,-" thirdtitle="30klip" thirdprice="12.999,-" />
                    
                    <Pricebox toptitle="Personligt trænings forløb, 12 uger, 2 gange træning om ugen" topprice="11.999,-" secondtitle="12 uger, 3 gange træning om ugen" secondprice="15.299,-" />

                    <Pricebox toptitle="Duet træning 60min" topprice="749,-" secondtitle="10klip" secondprice="6.999,-" thirdtitle="20klip" thirdprice="13.499,-" fourthtitle="30klip" fourthprice="17.999,-" />

                    <Pricebox toptitle="Fysioterapi, priser følger overenskomsten:" secondtitle="45min" secondprice="489,44,-" thirdtitle="30min" thirdprice="311,21,-" />

                </div>
            
            </div>

            <Divider text="Vi gør opmærksom på at priserne er uden medicinen." list="Sygeforsikring Danmark giver tilskud på den medicinske behandling, 25-50% afhængig af om man er medlem af gruppe 1,2 eller 5." />

            <div className='mail'>
                <h2>Send os en mail!</h2>
                <ContactUs />
            </div>
        </div>
     );
}
 
export default Priser;