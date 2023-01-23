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

                <div className='introimage'>
                    <img src="../placeholderimg.jpg" alt="Menneskerne bag let om livet" />
                </div>
                
                <div className='introduktion'>
                    <p>Hos Let om Livet vil vi gerne have, at flere mennesker får de redskaber og den hjælp de har brug for, for at kunne tabe sig. Vores højeste målsætning er at du opnår et varigt vægttab, gennem livsstilsændringer med fokus på fysisk aktivitet og kostvaner.</p>
                    <p>I Let om Livet står vi klar til at designe vægttabsprogrammet, der passer bedst til dig og dine behov. Vi kan tilbyde"</p>
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