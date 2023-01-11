
import  styled  from 'styled-components/native';
import DownIcon from './../../assets/Icon/DownIcon';
import PointsOptions from './../../assets/Icon/PointsOptions';



export default function TopBar(){
    return(
        <Container>

            <ContainerLeft>
                <DownIcon/>
            </ContainerLeft>

            <ContainerCenter>
                
                <Title>Playlist</Title>
                
                <SubTitle>Música</SubTitle>
                
            </ContainerCenter>

            <ContainerRight>
                <PointsOptions/>
            </ContainerRight>
            

        </Container>
    )
}


const Container = styled.View`
width: 100%;
margin-top: 50px;
height: 50px;
flex-direction: row;

`

const Title = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: white;
`

const SubTitle = styled.Text`
    font-size: 17px;
    font-weight: 400;
    color: white;
`

const ContainerLeft = styled.View`
flex: 1;
flex-direction: row;
align-items: center;

padding-left: 20px;

`
const ContainerCenter = styled.View`
flex: 2;

justify-content: center;
align-items: center;
`

const ContainerRight = styled.View`
flex-direction: row-reverse;

align-items: center;
flex: 1;

padding-left: 20px;
`
