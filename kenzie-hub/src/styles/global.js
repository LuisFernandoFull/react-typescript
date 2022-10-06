import { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root{
        /*---------------------- Colors ---------------------*/

        /* Primary Palette */

        --color-primary: #FF577F;

        --color-primary-Focus: #FF427F;

        --color-primary-Negative: #59323F;

        /* Grey Scale Palette */

        --grey-4: #121214;
       
        --grey-3: #212529;
       
        --grey-2: #343B41;
       
        --grey-1: #868E96;
       
        --grey-0: #F8F9FA;


        /* Feedback Palette */

        --sucess: #3FE864;

        --negative: #E83F5B;

    }

`;
export default StyleGlobal;
