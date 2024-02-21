# What's new with React Router 6 

1. Installation
   `npm i react-router-dom@6`

2. Connect the URL
   Connect your app to the browser's URL. So your index.js file will look like this:

   ```react
   import { render } from "react-dom";
   import { BrowserRouter } from "react-router-dom";
   import App from "./App";
   
   const rootElement = document.getElementById("root");
   render(
     <BrowserRouter>
       <App />
     </BrowserRouter>,
     rootElement
   );
   ```

3. Add navigation links

   ```react
   import { Link } from "react-router-dom";
   
   export default function App() {
     return (
       <div>
         <h1>Bookkeeper</h1>
         <nav
           style={{
             borderBottom: "solid 1px",
             paddingBottom: "1rem"
           }}
         >
           <Link to="/invoices">Invoices</Link> |{" "}
           <Link to="/expenses">Expenses</Link>
         </nav>
       </div>
     );
   }
   ```

4. Let's start with very simple change for react router 6:
   The `<Switch></Switch>` component is replaced with `<Routes></Routes>` component.
   So, the 