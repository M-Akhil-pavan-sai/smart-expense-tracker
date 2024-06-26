import styled from "styled-components";
import {MainLayout} from './styles/Layout'
import { Orb } from "./Components/Atoms/Orb/Orb";
import Navigation from "./Components/Organisms/Navigation/Navigation";
import { useMemo, useState } from "react";
import Dashboard from "./Components/Organisms/Dashboard/Dashboard";
import Income from "./Components/Organisms/Income/Income";
import Expenses from "./Components/Organisms/Expenses/Expenses"


const AppStyled= styled.div`
height: 100vh;
background-image: url('');
main{
    flex: 1;
    background: #9a9edb;
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`
function App() {
  const [active,setActive] = useState(1)
  const orbMemo = useMemo(()=>{
    return <Orb/>
  },[])




  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Income />
      case 3: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }


  return (
    <AppStyled className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

export default App;
