import  {StatusBar}  from 'expo-status-bar';
import  styled  from 'styled-components/native';
import TopBar from './pages/Components/TopBar';
import AlbumImage from './pages/Components/AlbumImage';
import Information from './pages/Components/Information';
import ControlMusic from './pages/Components/ControlMusic';




export default function App() {
  return (
    <Container>
    <StatusBar style='inverted' />
      <TopBar/>
      <AlbumImage/>
      <Information/>
      <ControlMusic/>
    </Container>
    
  );
}


const Container = styled.View`
background-color: black;
flex: 1;
background-color: #2A2141;

`


