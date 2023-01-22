/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Divider from '../components/Divider';
import Infobox from "../components/Infobox";
// import Button from "../components/Button";
// import { Link } from 'react-router-dom';

const Home = () => {

    const style = css`
        text-align: center;

        & .divider {
            background-color: #95c11f;
            color: white;
            margin: 1em 0;
            padding: 1em 0;
            font-style: italic;
        }

        & .intro {
            padding: 3em;
            display: flex;

            & .introimage {
                flex: 2;
            }

            & .introduktion {
                flex: 3;
                padding:1em;
            }
        }
        
    `

    return ( 
        <div css={style}>
            
            <Divider text="Let om Livet - med speciale i vægttab, herunder medicinsk behandling" />

            <section className='intro'>
                <div className='introimage'>
                    <img src="../placeholderimg.jpg" alt="Menneskerne bag let om livet" />
                </div>
                
                <div className='introduktion'>
                    <h1>Introduktion</h1>
                    <p>Hos Let om Livet vil vi gerne have, at flere mennesker får de redskaber og den hjælp de har brug for, for at kunne tabe sig. Vores højeste målsætning er at du opnår et varigt vægttab, gennem livsstilsændringer med fokus på fysisk aktivitet og kostvaner.</p>
                </div>
                
            </section>

            <Divider text="I Let om Livet står vi klar til at designe vægttabsprogrammet, der passer bedst til dig og dine behov. Vi kan tilbyde" list="⦁ Lægekonsultation - herunder medicinsk behandling
⦁ Personlig træning, coaching og kostvejledning inkluderet - både online og ved fremmøde
⦁ Fysioterapi" />

            <Infobox description="" />
            
        </div>
     );
}
 
export default Home;