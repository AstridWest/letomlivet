/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Divider = ({text, list}) => {
    const style = css`
        background-color: #95c11f;
        color: white;
        text-align: center;
        padding: 1em 0;
    `

    return ( 
        <div css={style} className='divider'>
            <p>{text}</p>
            <p>{list}</p>
        </div>
     );
}
 
export default Divider;