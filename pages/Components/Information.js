import { Image, View } from 'react-native';
import  styled  from 'styled-components/native';




export default function Information(){
    return(
        <Container>
            <Title>Arctic Monkeys</Title>
            <SubTitle>Arctic Monkeys</SubTitle>
        </Container>
    )
}


const Container = styled.View`

flex: 1;
align-items: center;

`
const Title = styled.Text`
font-size: 30px;
color: black;
color: white;
`

const SubTitle = styled.Text`
font-size: 20px;
color: black;
color: white;

`