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

            & p {
                padding-bottom: 1.5em;
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
                    <img src="family.jpg" alt="Menneskerne bag, let om livet" />
                </div>
                
                <div className='introduktion'>
                    <p>Let om Livet står klar til, at give dig redskaberne til varige resultater. 
                        Vi hjælper med livsstil og vaneændringer, med fokus på fysisk aktivitet, kost og supplerende vægttabsmedicin.
                        Har du et ønske om forandring, hvad enten det er med henblik på vægttab, smertebehandling, forbedret form, øget styrke eller større muskler. Så er Let om Livet sundhedsklinikken for dig.
                    </p>
                    <p>Vi har en ambition om at hjælpe dig, til at få et større fysisk og mentalt overskud i hverdagen, og være det bedste version af dig selv, for både dig og dine nærmeste.</p>
                    <p>Vi kan tilbyde:</p>
                    <p>⦁ Lægekonsultation - herunder medicinsk behandling</p>
                    <p>⦁ Personlig træning, coaching og kostvejledning inkluderet - både online og ved fremmøde</p>
                    <p>⦁ Fysioterapi</p>
                </div>
                
            </section>

            <Divider />
            
        </div>
     );
}
 
export default Home;