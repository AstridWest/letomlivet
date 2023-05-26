/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Divider from '../components/Divider';

const Home = () => {

    const style = css`
        text-align: center;

            & h1 {
                font-size: 3em;
                font-family: 'Vesper Libre', sans-serif;
            }

            & .uppercase {
                font-style: italic;
                text-transform: uppercase;
            }

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
            background-image: url("../images/desktop.jpg");
            background-size: cover;
            background-position: top;

            & .image {
                flex:1;

                & img {
                    border-radius: 1em;
                }
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

@media only screen and (max-width: 700px) {
    .intro {
        flex-direction: column;
        background-image: url("../images/mobile.jpg");
        background-size: cover;
        background-position: center;
    }
}
        
    `

    return ( 
        <div css={style}>
            <h1>Let om Livet</h1>
            <p className='uppercase'>- med speciale i vægttab, herunder medicinsk behandling</p>

            <section className='intro'>

                <div className='image'>
                    <img src="./images/forsideplaceholder.jpg" alt="Menneskerne bag, let om livet" />
                </div>
                
                <div className='introduktion'>
                    <h4>
                        Er du klar til at investere i dig selv?
                    </h4>
                    <p>
                        Let om Livet står klar til, at give dig redskaberne til varige resultater. 
                    </p>
                    <p>
                        Vi hjælper med livsstil og vaneændringer, med fokus på fysisk aktivitet, kost og supplerende vægttabsmedicin. Vores principper er ligetil, uden kostrestriktioner og kan blive en del af dit repetoire.
                    </p>
                    <p>Har du et ønske om forandring, hvad enten det er med henblik på vægttab, smertebehandling, forbedret form, øget styrke eller større muskler. Så er Let om Livet sundhedsklinikken for dig.</p>
                    <p>Vi har en ambition om at hjælpe dig, til at få et større fysisk og mentalt overskud i hverdagen, og blive den bedste version af dig, for både dig selv, og dine nærmeste.</p>
                    <p>Til dette formål tilbyder vi</p>
                    <p>⦁ Lægekonsultation - herunder vægttabsmedicin</p>
                    <p>⦁ Fysioterapi</p>
                    <p>⦁ Personlig træning, styrketræning og reformer pilates </p>
                    <p>⦁ Online forløb</p>
                    <p className='italic'>- Hertil coaching og kostvejledning inkluderet, både online og ved fremmøde</p>
                </div>
                
            </section>

            <Divider />
            
        </div>
     );
}
 
export default Home;