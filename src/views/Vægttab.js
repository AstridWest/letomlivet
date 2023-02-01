/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Vægttab = () => {
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
            padding: 1em 0;
        }

        & li {
            padding-bottom: 0.5em;
        }

        & .info {
            padding: 0 10em;
            display: flex;
            gap: 3em;
            margin-bottom: 5em;

            & .image {
                flex:1;
            }

            & .text {
                flex:1;
            }

            & .test{
                padding-top: 0;
            }

            & .test img {
                max-height:500px;
            }
        }

        & .udløser {
            display: flex;
        }

        & .bivirkninger {
            text-align: center;
            margin: 2em 0;
            
            & ul {
                display: flex;
                justify-content: space-around;
                padding:1em 0;
            }
        }

        & .moreinfo{
            padding: 1em 3.5em;
            background-color: #95c11f;
            color: white;
        }


@media only screen and (max-width: 750px) {
    .info {
        flex-direction: column;
        padding: 0 3em;
        gap:0;
    }

    .reverse{
        flex-direction: column-reverse;
    }
  
}
    `

    return ( 
        <div css={style}>

            <h1>Medicinsk forløb</h1>

            <div className='info reverse'>
            
                <div className='text'>
                    <p>
                        Jeg er en læge, som i mange år har beskæftiget mig med behandling, herunder den medicinske behandling, af personer med overvægt, livstilsbetingede helbredsudfordringer og sygdomme samt Diabetes 2. Dette i forbindelse med mange års tjeneste i lægepraksis samt med patienter i min private konsultation. 
                    </p>
                    <p>
                        Hertil har jeg mange års erfaring som underviser indenfor området. 
                        Får du hjælp til at komme ud af din overvægt, så vil du få og opleve et markant bedret liv. 
                    </p>
                    <p>
                        Du skal være meget velkommen.
                    </p>
                    <p>
                        - Læge Per Warrer
                    </p>

                </div>
                
                <div className='image test'>
                    <img src="./images/lægen.jpg" alt="lægen" />
                </div>
            </div>

            <div className='info'>
                <div className='image'>
                    <img src="./images/doctorpatient.jpg" alt="læge der holder din hånd" />
                </div>
                <div className='text'>
                    <p className='test'>Ved opstart af et medicinsk forløb hos os, indleder vi med en lægekonsultation. Her afklarer vi om du opfylder rammerne til at modtage den medicinske behandling.</p>
                    <p>Opfylder du følgende kriterier, kan du godkendes til hertil:</p>
                    <ul>
                        <li>BMI over 30</li>
                        <li>BMI over 27, med vægtrelateret sygdom</li>
                    </ul>
                    <p>Ved lægevurderingen bliver det desuden afklaret om der er kontraindikationer for den medicinske behandling.
                        Ved kontraindikationer behandler vi ikke med Wegovy - KONTRAINDIKATIONER (Visse helbredstilstande gør dig uegnet til Wegovy behandling. Graviditet. Fertilitetsbehandling. Tidligere betændelse i bugspytskirtlen. Der kan være andre helbredstilstande som udelukker behandlingen, det vil lægen afgøre.)</p>
                    <p>Sådan udregner du BMI:</p>
                    <p>BMI = vægt i kilo / (højde × højde i meter)</p>
                    <p>Eksempel: Er man 170 cm og vejer 90 kg:</p>
                    <p>90 / (1,7 x 1,7) = 31,1</p>
                </div>
            
            </div>
            
            <div className='info reverse'>
                <div className='text'>
                    <h4>Wegovy er et kunstigt fremstillet tarmhormon, som kan udløse vægttab ved følgende mekanismer i kroppen:</h4>
                    <ul>
                        <li>Hæmning af appetit i hjernen</li>
                        <li>Forsinket tømning af mavesækken, så man oplever mæthed hurtigt ved fødeindtag.</li>
                        <li>Øget insulineffekt, således at energien bliver ført til musklerne. Her bliver energien brugt fremfor lagret på kroppen som fedt.</li>
                    </ul>  
                </div>

                <div className='image'>
                    <img src="./images/womanhappy.jpg" alt="en glad kvinde" />
                </div>

            </div>
            
            <div className='info'>
                <div className='image'>
                    <img src="./images/stairs.jpg" alt="en kvinde der går op af trapper" />
                </div>
                
                <div className='text'>
                    <h4>På grund af disse virkningsmekanismer, kan medicinen udløse bivrikninger i form af:</h4>

                    <ul>
                        <li>Kvalme</li>
                        <li>Mavesmerter</li>
                        <li>Ændret afføring</li>
                        <li>Tendens til hård mave</li>
                    </ul>
                    
                    <p>Bivirkningerne vil aftage efter en kort behandlingsperiode.</p>   
                    <p>Der er mulighed for at de kommer kortvarigt tilbage ved øget dosering.</p>
                </div>
            </div>

            <div className='moreinfo'>
                <p>Kliniske studier viser at de patienter der tager wegovy, i gennemsnit taber sig: ca 10% ved 20 uger, ca 16 % ved 12 måneder ca 18% ved 18 måneder. En tredjedel af patienterne taber sig 20% eller mere. Vi gør opmærksom på, at dette er gennemsnitlig data, og at vægttabene er individuelle og meget varrierene.</p>
                <a href="https://www.novomedlink.com/obesity/products/treatments/wegovy/efficacy-safety/clinical-trial-1-results.html" target="_blank" rel="noreferrer noopener">LÆS MERE HER</a>
            </div>
            
        </div>
     );
}
 
export default Vægttab;