/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Divider from '../components/Divider';

const Home = () => {

    const style = css`
        text-align: center;

        & .divider {
            background-color: #95c11f;
            color: white;
            padding: 1em 0;
            font-style: italic;
        }

        & .intro {
            padding: 3em;
            display: flex;
            gap: 3em;
            font-family: 'Source Sans Pro', sans-serif;

            & .image {
                flex:1;
            }

            & .introduktion {
                flex:1;
            }

            & h4 {
                padding-bottom: 0.7em;
            }

            & p {
                padding-bottom: 1.5em;
            }

            & .italic{
                font-style: italic;
            }
        }

@media only screen and (max-width: 500px) {
    .intro {
        flex-direction: column;
    }
}
        
    `

    return ( 
        <div css={style}>
            <h1>Let om Livet - med speciale i vægttab, herunder medicinsk behandling</h1>
            <section className='intro'>

                <div className='image'>
                    <img src="./images/family.jpg" alt="Menneskerne bag, let om livet" />
                </div>
                
                <div className='introduktion'>
                    <h4>
                        Har du en drøm om hvordan din krop skal se ud og føles, og er du klar til at investere i dig selv?
                    </h4>
                    <p>
                        Let om Livet står klar til, at give dig redskaberne til varige resultater. 
                    </p>
                    <p>
                        Vi hjælper med livsstil og vaneændringer, med fokus på fysisk aktivitet, kost og supplerende vægttabsmedicin. Vores principper er ligetil, uden kost restriktioner og kan blive en del af dit repetoire.
                    </p>
                    <p>Har du et ønske om forandring, hvad enten det er med henblik på vægttab, smertebehandling, forbedret form, øget styrke eller større muskler. Så er Let om Livet sundhedsklinikken for dig.</p>
                    <p>Vi har en ambition om at hjælpe dig, til at få et større fysisk og mentalt overskud i hverdagen, og blive den bedste version af dig, for både dig selv, og dine nærmeste.</p>
                    <p>Til dette formål tilbyder klinikken</p>
                    <p>⦁ Lægekonsultation - herunder vægttabsmedicin</p>
                    <p>⦁ Fysioterapi</p>
                    <p>⦁ Personlig træning, styrketræning og reformer pilates </p>
                    <p className='italic'>- Hertil coaching og kostvejledning inkluderet, både online og ved fremmøde</p>
                </div>
                
            </section>

            <Divider />
            
        </div>
     );
}
 
export default Home;