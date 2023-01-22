/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Vægttab = () => {
    const style = css`
        border-top: 0.5em solid #95c11f;
    `

    return ( 
        <div css={style}>

            <h1>Medicin</h1>

            <div>
                <p>Ved opstart af et medicinsk forløb hos os, indleder vi med en lægekonsultation. Her afklarer vi om du opfylder rammerne til at modtage den medicinske behandling.</p>
                <p>Opfylder du følgende kriterier, kan du godkendes til hertil:</p>
                <ul>
                    <li>⦁ BMI over 30</li>
                    <li>⦁ BMI over 27, med vægtrelateret sygdom</li>
                </ul>
                <p>Ved lægevurderingen bliver det desuden afklaret om der er kontraindikationer for den medicinske behandling.
                    Ved kontraindikationer behandler vi ikke med Wegovy - KONTRAINDIKATIONER (Visse helbredstilstande gør dig uegnet til Wegovy behandling. Graviditet. Fertilitetsbehandling. Tidligere betændelse i bugspytskirtlen. Der kan være andre helbredstilstande som udelukker behandlingen, det vil lægen afgøre.)</p>
                <p>Sådan udregner du BMI:</p>
                <p>BMI = vægt i kilo / (højde × højde i meter)</p>
            </div>

            <div>
                <h4>Wegovy er et kunstigt fremstillet tarmhormon, som kan udløse vægttab ved følgende mekanismer i kroppen:</h4>
                <ul>
                    <li>⦁ Hæmning af appetit i hjernen</li>
                    <li>⦁ Forsinket tømning af mavesækken, så man oplever mæthed hurtigt ved fødeindtag.</li>
                    <li>⦁ Øget insulineffekt, således at energien bliver ført til musklerne. Her bliver energien brugt fremfor lagret på kroppen som fedt.</li>
                </ul>
            </div>
            
            <div>
                <h4>På grund af disse virkningsmekanismer, kan medicinen udløse bivrikninger i form af:</h4>
                <ul>
                    <li>⦁ Kvalme</li>
                    <li>⦁ Mavesmerter</li>
                    <li>⦁ Ændret afføring</li>
                    <li>⦁ Tendens til hård mave</li>
                </ul>
                <p>Bivirkningerne vil aftage efter en kort behandlingsperiode. Der er mulighed at de kommer kortvarigt tilbage ved doseøgning.</p>
            </div>

            <div>
                <p>Kliniske studier viser at de patienter der tager wegovy, i gennemsnit taber sig: ca 10% ved 20 uger, ca 16 % ved 12 måneder ca 18% ved 18 måneder. En tredjedel af patienterne taber sig 20% eller mere. Vi gør opmærksom på, at dette er gennemsnitlig data, og at vægttabene er individuelle og meget varrierene.</p>
                <a href="https://www.novomedlink.com/obesity/products/treatments/wegovy/efficacy-safety/clinical-trial-1-results.html" target="_blank" rel="noreferrer noopener">LÆS MERE HER</a>
            </div>
            
        </div>
     );
}
 
export default Vægttab;