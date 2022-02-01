# Styled Components in React

1. Installation
   Yarn: 
   `yarn add styled-components`

   

   `yarn add -D @types/styled-components`
   This installs the styled-components types for TypeScript as a dev dependency.

   

   npm:

   `npm i styled-components`

   `npm i --save-dev @types/styled-components`

   

2. Usage

   ```jsx
   import styled from "styled-components"
   import { ThemeProvider } from "styled-components"
   import GlobalsTyles from 'its location'
   
   // style. + then html tag + ``
   // inside backticks add css/scss
   
   // This is standard responsive container style
   const Container = styled.div`
   	width: 1000px;
   	max-width: 100%;
   	padding: 0 20px;
   	margin: 0 auto;
   	background-color: ${({theme}: any) => theme.colors.grey1};
   
   	h1 {
   		color: red;
   	}
   
   	&:hover {
   		background-color: ${({bg}: any) => bg};
   	}
   `
   
   // theme object can be imported from another file as it can get larger
   const theme = {
       colors: {
           grey1: '#F0F0F0',
       },
   }
   
   funciton App() {
       return (
           <ThemeProvider theme = {theme}>
               <>
               	<GlobalStyles />
           		<Container bg='red'>
              			<h1>Hello World</h1>
   	        	</Container>
           	</>
           </ThemeProvider>
       )
   }
   
   export default App
   ```

   
   

3.  Global Styles

   ```jsx
   import {createGlobalStyle} from "styled-components"
   
   const GlobalStyles = createGlobalStyle`
   	@import url('https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@400;500&display=swap');
   
   	* {
   		box-sizing: border-box;
   	}
   
   	body {
   		font-family: 'Gemunu Libre', sans-serif;
   		font-size: 1.15em;
   		background: ${({theme}: any) => theme.colors.grey1};
   	}
   
   	img {
   		max-width: 100%;
   	}
   `
   
   export default GlobalStyles;
   ```

   





## Reference: [Styled Components Crash Course & Project](https://youtu.be/02zO0hZmwnw)