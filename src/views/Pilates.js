/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Pilates = () => {

    const style = css`

    border-top: 0.5em solid #95c11f;
    background-image: url("../images/desktop.jpg");
    background-size: cover;
    background-position: top;
    padding-bottom: 5em;

    & h1 {
        text-align: center;
        padding: 1.5em 0;
        font-family: 'Vesper Libre', sans-serif;
    }

    & p {
        padding-bottom: 0.9em;
    }

    & li {
        list-style-type: none;
        padding-bottom: 0.9em;
    }

    & .flex {
        display: flex;
        gap: 3em;
        margin-bottom: 3em;

        & .image {
                flex:3;
            }

        & .text {
            flex:3;
        }
    }

@media only screen and (max-width: 700px) {
background-image: url("../images/mobile.jpg");
background-size: cover;
background-position: center;
padding: 0 2em 1em;

.flex {
        flex-direction: column;
        padding: 0 3em;
        gap:0;
    }
}
    
`
    return ( 
        <div css={style}>

        <h1>Pilates reformer</h1>

        <div className="maxwidth flex">

           <div className='image'>
                <img src="./images/pilates.jpg" alt="pilates bænke" />
           </div>

           <div className='text'>
                <p>
                    Pilates reformer er en unik og gennemført måde at træne hele kroppen på, både i dybden og i stor grad også i funktionen. Træningen styrker og smidiggør kroppen, samtidig med at eventuelle ubalancer og uhensigtsmæssige bevægelsesmønstre kommer til syne, så vi får mulighed for at rette op på dem.
                </p>
                <p>
                    Intensitet og modstand indstilles individuelt, så vi kan tilpasse træningen specifikt til dig - hvad enten du er ny, trænet eller elite. 
                </p>

                <p>
                    Ved jævnlig træning kan du se frem til:
                </p>
                <ul>
                    <li>
                        ⦁ Øget styrke i hele kroppen, særligt mave og ryg
                    </li>
                    <li>
                        ⦁ Større udholdenhed
                    </li>
                    <li>
                        ⦁ Forbedret mobilitet og kropsbevidsthed
                    </li>
                    <li>
                        ⦁ Øget smidighed
                    </li>
                    <li>
                        ⦁ Bedre kondition
                    </li>
                    <li>
                        ⦁ Struktur på din træning
                    </li>
                </ul>

                <p>
                    Udover at være effektiv og gavnlig på denne lange række punkter, er reformer maskinen yderst venlig mod muskler og led, dette hvorfor flere fysioterapeuter benytter dem til træning og genoptræning.
                </p>
                <p>
                    Så har du lidt skavanker og skader, kan du trygt prøve kræfter med disse maskiner, bare husk at informer træneren, så vi kan tage hensyn til det.
                </p>
                <p>
                    Vi anbefaler forholdsvist tætsiddende tøj, for at have frie bevægelsesmuligheder. Skridsikre sokker er et must-have, men du kan godt have almindelige sokker på første gang. Hertil frabeder vi lynlåse på forside og bagsider af bukser, da dette kan skade maskinernes polstring.
                </p>
                <p>
                    Til sidst vil vi sige at alle kan deltage, uanset niveau. Så book din intro time nu, som vi iøvrigt giver 50% rabat på, og tag eventuelt en makker med.
                </p>
           </div>
        </div>
       

    </div>
     );
}
 
export default Pilates;