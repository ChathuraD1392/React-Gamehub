import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Grid
        templateAreas={`"nav nav"
        "aside main"
        `}
        gap="1"
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <GridItem area="aside" bg="tomato">
          Aside
        </GridItem>
        <GridItem area="main" bg="blue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
