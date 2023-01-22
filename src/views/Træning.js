/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const Træning = () => {
    const style = css`
        
    `

    return ( 
        <div css={style}>
           <h3>Et træningsforløb indledes med en samtale, hvor vi får defineret hvilke mål du har og hvordan din nuværende fysiske form er
            I alle vores forløb er kostvejledning, vane og adfærdscoaching omkring spisevaner inkluderet, da dette er essensielt for livsstilsændringer
            Træningsforholdene er private med udgangspunkt i 1:1 træning. Dog er der mulighed for duet træning.</h3>

            <div>
                <h5>Vægttabsforløb</h5>
                <p>Hos Let om Livet tilbyder vi træningsforløb med fokus på vægttab. Disse  forløb kan naturligvis kombineres med medicinsk forløb med Wegovy som supplement.</p>
                <p>Forløbet løber typisk over 12 uger af gangen, og tilrettelægges med udgangspunkt i hvor du er nu, og hvad dine mål og forudsætninger er.
                    Vi tilbyder traditionel styrketræning og træning på de populære og skånsomme Reformer maskiner. Alt bliver tilpasset dig og dine præferencer.
                    Ved overvægt er der tendens til dekonditionering og smerter i typsik lænd, hofter og knæ.
                    Reformer maskinen er særligt brugervenlig ved disse tilfælde. Man træner med fjedermodstand, og i stor grad uden om tyndgekræften.</p>
            </div>

            <div>
                <p>Styrkeforløb</p>
                <p>Er du interesseret i at opbygge muskelmasse, er dette forløbet til dig.
                    Træning hos Let om Livet tager udgangspunkt i at bygge dig op fra grunden, skabe gode bevægelsesmønstre og grundstyrke. Hertil er der fri sparring ved hver træningspas, så vores viden bliver din viden.
                    Desuden vil din træning blive bygget op, efter en videnskabelig tilgang, for at minimere skaderisici og optimere dine træningsresultater.</p>
            </div>

            <div>
                <h5>Onlineforløb:</h5>
                <p>Et online forløb indledes ved en virtuel samtale. Dialogen tager afsæt i dig, din situation, behov og målsætning. I samarbejde med dig får du lagt et træningsprogram, hvad enten du er til træning i center, det fri, hjemmetræning eller noget helt fjerde, finder vi vejen som passer bedst til dig. Under forløbet holder vi løbende kontakt.
                Ved behov kan du altid kontakte os.</p>
            </div>

            <div>
                <h5>Priser og forløb:</h5>

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

                <p>Vi gør opmærksom på at priserne er uden medicinen.</p>
                <p>Sygeforsikring Danmark giver tilskud på den medicinske behandling, 25-50% afhængig af om man er medlem af gruppe 1,2 eller 5.</p>
            </div>
        </div>
     );
}
 
export default Træning;