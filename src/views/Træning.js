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
            padding-bottom: 0.5em;
        }

        & p {
            padding-bottom: 0.5em;
        }

        & li {
            list-style-type: none;
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

            & .list{
                padding:0.7em 0;
            }

            & .bigimage{

                & img {
                    height:100%;
                }
            }
        }

       

@media only screen and (max-width: 750px) {
    .info {
        flex-direction: column;
        padding: 0 3em;
        gap:0;
    }

    .reverse {
        flex-direction: column-reverse;
    }
  
}
    `

    return ( 
        <div css={style}>
            <h1>Personlig træning</h1>

            <div className='info'>
                <div className='image'>
                    <img src="./images/jonas.jpg" alt="den personlige træner" />
                </div>
                
                <div className='text'>
                    <p>Drømmekroppen behøver ikke forblive en drøm, kom godt i gang med Let om Livet ved din side. Ingen slankekurer, ingen forbud, ingen dårlig samvittighed.</p>
                    
                    <div>
                        <p>Vi hjælper dig af med</p>
                        <ul>
                            <li>⦁ De overflødige kilo</li>
                            <li>⦁ De irriterende skader og skavanker</li>
                            <li>⦁ Usunde forhold til kost</li>
                        </ul>  
                    </div>
                    

                    <div className='list'>
                        <p>Og hen imod</p>
                        <ul>
                            <li>⦁ Større mentalt og fysisk overskud</li>
                            <li>⦁ En stærkere, mere udholdene og smertefri krop</li>
                            <li>⦁ Forbedret helbred og velvære</li>
                            <li>⦁ Større tilfredshed og bedre samvittighed</li>
                        </ul>  
                    </div>
                    

                    <p>
                        Et træningsforløb indledes med en samtale, hvor vi får defineret hvilke mål du har og hvordan din nuværende fysiske form er.
                    </p>

                    <p>
                    I alle vores forløb er kostvejledning, vane og adfærdscoaching omkring spisevaner inkluderet. 
                    Spiser du med følelser, mangler du noget i kosten eller lignende, så er vi klar til at hjælpe med det også. Vi arbejder ud fra simple og ukomplicerede kost og træningsprincipper, og du bliver naturligvis sat godt ind i dem.
                    </p>
                    <p>
                        Personlig træning foregår i Snekkersten, Nordsjælland.
                    </p>
                    <p>
                        Træningsforholdene er private med udgangspunkt i 1:1 træning. Dog er der mulighed for duet træning. Det er op til dig, om du vil træne alene eller med en du kender, og der er i hvert fald lidt rabat at hente, oveni støtten fra din træningspartner.
                    </p>

                    <p>
                        Husk at der er mulighed for traditionel styrketræning, og/eller Reformer Pilates.
                        Dette kan du høre mere om ved samtalen.
                    </p>
                </div>
                
            </div>

            <div className='info reverse'>
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

                <div className='image bigimage'>
                    <img src="./images/diet.jpg" alt="en kvinde der holder et æble" />
                </div>
            </div>

            <div className='info'>
                <div className='image bigimage'>
                    <img src="./images/styrketræning.jpg" alt="kvinde der træner" />
                </div>

                <div className='text'>
                    <h4>Styrkeforløb</h4>
                    <p>
                    Er du interesseret i at opbygge muskelmasse, er dette forløbet til dig.
                    Træning hos Let om Livet tager udgangspunkt i at bygge dig op fra grunden, skabe gode bevægelsesmønstre og grundstyrke. Hertil er der fri sparring ved hver træningspas, så vores viden bliver din viden. 
                    </p>   
                    <p>
                        Desuden vil din træning blive bygget op, efter en videnskabelig tilgang, for at minimere skaderisici og optimere dine træningsresultater.
                    </p>
                    <p>
                        Vi sørger naturligvis for at træningen bliver sjov og varrieret, samtidig med at den er tilpasset dine præferencer. 
                    </p>
                    <p>
                        Har du først været igennem dette forløb, bliver fitnesscenteret og programlægning, langt mere overskueligt, da du ikke kun får erfaring, men også en masse grundviden om effektiv træning, og et bredt øvelses repetoire af høj kvalitet.     
                    </p>
                </div>
                
            </div>

            <div className='info reverse'>
                <div className='text'>
                    <h4>Onlineforløb:</h4>
                    <p>
                        Et online forløb indledes ved en virtuel samtale. Dialogen tager afsæt i dig, din situation, behov og målsætning. I samarbejde med dig får du lagt et træningsprogram, hvad enten du er til træning i center, det fri, hjemmetræning eller noget helt fjerde, finder vi vejen som passer bedst til dig.
                    </p>
                    <p>
                        Under forløbet holder vi løbende kontakt, og du får coaching i at opbygge bedre vaner i hverdagen. Vi har fokus på kost, træning, vaner og mindset, således at du bliver klædt på til, at fortsætte de gode vaner og resultater fremadrettet.
                    </p>
                    <p>
                        Vores viden bliver din viden, så du bliver i stand til, at sortere de mange misinformationer, omkring kost og træning, fra. 
                        Det er vanerne og din viden der gør, at du kan tage de gode resultater med dig fremover.
                    </p>
                    <p>Ved behov kan du altid kontakte os.</p>
                </div>

                <div className='image bigimage'>
                    <img src="./images/sportywoman.jpg" alt="kvinde der træner i fitnesscenteret med sit onlineforløb" />
                </div>
            </div>

        </div>
     );
}
 
export default Træning;