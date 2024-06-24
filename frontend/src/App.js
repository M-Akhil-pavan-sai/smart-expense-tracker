import styled from "styled-components";
import {MainLayout} from './styles/Layout'
import { Orb } from "./Components/Atoms/Orb/Orb";
import Navigation from "./Components/Organisms/Navigation/Navigation";

const AppStyled= styled.div`
height: 100vh;
background-image: url('');
`
function App() {
  return (
    <AppStyled className="App">
      <MainLayout>
        <Orb/>
      <Navigation/>
      </MainLayout>
    </AppStyled>
  );
}

export default App;
