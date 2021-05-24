import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'



export const GlobalStyle = createGlobalStyle`
  ${reset}
    @media (min-width : 1024px) and (max-width : 1920px) {
        #__next { position: relative; width : 80%; padding: 2% 10% 2% 10%;}
    } 
    @media (min-width : 0px) and (max-width : 1350px) {
        #__next { position: relative; width : 1350px; padding: 2% 10% 2% 10%;}
    }

    font: "Fira Sans", sans-serif;
`