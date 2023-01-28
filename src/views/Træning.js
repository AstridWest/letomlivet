/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const Træning = () => {
    const style = css`
        border-top: 0.5em solid #95c11f;

        & h1 {
            text-align: center;
            padding: 1.5em 0;
        }

        & h4 {
            text-align: center;
            padding-bottom: 1.5em;
        }

        & p {
            padding-bottom: 1em;
        }

        & .info {
            padding: 0 10em;
            display: flex;
            gap: 3em;
            margin-bottom: 5em;

            & .image {
                flex:3;
            }

            & .text {
                flex:3;
            }
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
            <h1>Personlig træning</h1>

            <div className='info'>
                <div className='image'>
                    <img src="jonas.jpg" alt="den personlige træner" />
                </div>
                
                <div className='text'>
                    <p>Et træningsforløb indledes med en samtale, hvor vi får defineret hvilke mål du har og hvordan din nuværende fysiske form er
                    I alle vores forløb er kostvejledning, vane og adfærdscoaching omkring spisevaner inkluderet, da dette er essensielt for livsstilsændringer
                    Træningsforholdene er private med udgangspunkt i 1:1 træning. Dog er der mulighed for duet træning.
                    </p>  
                </div>
                
            </div>

            <div className='info'>
                <div className='text'>
                    <h4>Vægttabsforløb</h4>
                    <p>Hos Let om Livet tilbyder vi træningsforløb med fokus på vægttab. Disse  forløb kan naturligvis kombineres med medicinsk forløb med Wegovy som supplement.</p>
                    <p>Forløbet løber typisk over 12 uger af gangen, og tilrettelægges med udgangspunkt i hvor du er nu, og hvad dine mål og forudsætninger er.
                        Vi tilbyder traditionel styrketræning og træning på de populære og skånsomme Reformer maskiner. Alt bliver tilpasset dig og dine præferencer.
                        Ved overvægt er der tendens til dekonditionering og smerter i typsik lænd, hofter og knæ.
                        Reformer maskinen er særligt brugervenlig ved disse tilfælde. 
                    </p>
                    <p>Man træner med fjedermodstand, og i stor grad uden om tyndgekræften.</p>
                </div>

                <div className='image'>
                    <img src="diet.jpg" alt="en kvinde der holder et æble" />
                </div>
            </div>

            <div className='info'>
                <div className='image'>
                    <img src="styrketræning.jpg" alt="kvinde der træner" />
                </div>

                <div className='text'>
                    <h4>Styrkeforløb</h4>
                    <p>Er du interesseret i at opbygge muskelmasse, er dette forløbet til dig.
                    Træning hos Let om Livet tager udgangspunkt i at bygge dig op fra grunden, skabe gode bevægelsesmønstre og grundstyrke. Hertil er der fri sparring ved hver træningspas, så vores viden bliver din viden.
                    Desuden vil din træning blive bygget op, efter en videnskabelig tilgang, for at minimere skaderisici og optimere dine træningsresultater.
                    </p>    
                </div>
                
            </div>

            <div className='info'>
                <div className='text'>
                    <h4>Onlineforløb:</h4>
                    <p>Et online forløb indledes ved en virtuel samtale. Dialogen tager afsæt i dig, din situation, behov og målsætning. I samarbejde med dig får du lagt et træningsprogram, hvad enten du er til træning i center, det fri, hjemmetræning eller noget helt fjerde, finder vi vejen som passer bedst til dig. Under forløbet holder vi løbende kontakt.
                    </p>
                    <p>Ved behov kan du altid kontakte os.</p>
                </div>

                <div className='image'>
                    <img src="sportywoman.jpg" alt="kvinde der træner i fitnesscenteret med sit onlineforløb" />
                </div>
            </div>

        </div>
     );
}
 
export default Træning;