/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Infobox from "../components/Infobox";
import Button from "../components/Button";
import { Link } from 'react-router-dom';

const Home = () => {

    const style = css`
        
        text-align: center;

        & .section {
            padding: 5em;
        }

        & div {
            padding:5em 0;
            margin-bottom: 1em;
        }

        & .træning {
            background-image: url("https://source.unsplash.com/random/?Fitness/");
            background-size: cover;
        }

        & .coaching{
            background-image: url("https://source.unsplash.com/random/?Fitness/");
            background-size: cover;
        }

        & .fys {
            background-image: url("https://source.unsplash.com/random/?Fitness/");
            background-size: cover;
        }

        & .vægt {
            background-image: url("https://source.unsplash.com/random/?Fitness/");
            background-size: cover;
        }
        
    `

    return ( 
        <div css={style}>
            <section className='section'>
                <h1>En lille titel</h1>
                <p>Lidt text om noget og måske et lille billede ved siden af teksten</p>
            </section>
                
            <div className='træning'>
                <Infobox title="Personlig træning" description="bla bla bla" />
                <Link to="/træning">
                    <Button />
                </Link>
                
            </div>
            
            <div className='coaching'>
                <Infobox title="Kostvejledning og coaching" description="bla bla bla" />
                <Link to="/coaching">
                    <Button />
                </Link>
            </div>

            <div className='fys'>
                <Infobox title="Fysioterapi" description="bla bla bla" />  
                <Link to="/fysioterapi">
                    <Button />
                </Link>
            </div>
            
            <div className='vægt'>
                <Infobox title="Medicinsk vægtab" description="bla bla bla" />
                <Link to="/vægttab">
                    <Button />
                </Link>
            </div>
            
        </div>
     );
}
 
export default Home;