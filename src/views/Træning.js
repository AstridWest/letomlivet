/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const Træning = () => {
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

        & h4 {
            text-align: center;
            padding-bottom: 0.5em;
        }

        & p {
            padding-bottom: 0.8em;
        }

        & li {
            list-style-type: none;
        }

        & img {
            border-radius: 1em;
        }

        & .info {
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

       

@media only screen and (max-width: 700px) {
    background-image: url("../images/mobile.jpg");
    background-size: cover;
    background-position: center;

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

            <div className="maxwidth">

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
                            <li>⦁ En stærkere, mere udholdende og smertefri krop</li>
                            <li>⦁ Forbedret helbred og velvære</li>
                            <li>⦁ Større tilfredshed og bedre samvittighed</li>
                        </ul>  
                    </div>
                    

                    <p>
                        Et træningsforløb indledes med en samtale, hvor vi får defineret, hvilke mål du har og hvordan din nuværende fysiske form er.
                    </p>

                    <p>
                    I alle vores forløb er kostvejledning, vane og adfærdscoaching omkring spisevaner inkluderet. 
                    Spiser du med følelser, mangler du noget i kosten eller lignende, så er vi også klar til at hjælpe med det. Vi arbejder ud fra simple og ukomplicerede kost og træningsprincipper, og du bliver naturligvis sat godt ind i dem.
                    </p>
                   
                </div>
                
            </div>

            <div className='info reverse'>
                <div className='text'>

                    <p>
                        Personlig træning foregår i Snekkersten, Nordsjælland og træningsforholdene er private uden distraheringer, andre øjne eller afbrydelser.
                    </p>
                    <p>
                        Har du en træningsmakker, kan i godt træne sammen her i duet træning, men du kommer ikke til at træne med nogen du ikke selv har inviteret med. 
                    </p>
                    <p>
                        Der er mulighed for traditionel styrketræning og/eller Pilates reformer, som planlægges ud fra dine/jeres ønsker og behov.
                    </p>

                    <p>
                        Vi tilrettelægger træningen med udgangspunkt i hvor du er nu, og hvad dine mål og forudsætninger er. Så sørger vi naturligvis for, at træningen er sjov, effektiv og lærerig.
                    </p>

                    <p>
                        Træning hos Let om Livet tager udgangspunkt i at bygge dig op fra grunden, skabe gode bevægelsesmønstre og grundstyrke.
                        Dette er bl.a for at minimere skaderisici og optimere træningsresultaterne.
                    </p>

                    <p>
                        Hertil er der fri sparring ved hver træningspas, så vores viden bliver din viden. 
                    </p>   

                </div>

                <div className='image bigimage'>
                    <img src="./images/styrketræning.jpg" alt="kvinde der træner" />
                </div>
            </div>

            <div className='info'>
                <div className='image bigimage'>
                    <img src="./images/diet.jpg" alt="en kvinde der holder et æble" />
                </div>

                <div className='text'>
        
                   <p>
                        Er vægttab en del af målet, kan personlig træning og et medicnisk forløb kombineres for bedre og hurtigere resultater. Træning har nogle meget positive virkninger på et vægttab. Blandt andet bibeholdelse af muskelmasse, med en større procent fedttab som følge heraf.
                   </p>

                   <p>
                        Hertil vil en højere procent muskelmasse bidrage til et højere ligevægtsindtag - altså en højere daglig forbrænding.
                   </p>

                   <p>
                        Medicinen bør ses som et supplement til træningen og eventuelle livsstilsændringer.
                   </p>

                   <p>
                    Som tidligere nævnt indgår coaching og kostvejledning i træningssessionerne. Dette er vigtigt med henblik på ændring af kostvaner og adfærdsmønstre, som ofte spiller en meget stor rolle. 
                   </p>

                   <p>
                    Det er helt individuelt hvilke udfordringer man har, og der er ikke to vægttabsforløb som er ens. Man må se det som en process, og vi er her for at guide dig igennem den.
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

        </div>
     );
}
 
export default Træning;