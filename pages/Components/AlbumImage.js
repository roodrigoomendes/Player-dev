import { Image, View } from 'react-native';
import  styled  from 'styled-components/native';




export default function AlbumImage(){
    return(
        <Container>

            <ImageCapa 
            resizeMode="contain"
            source={require('../../assets/album.png')}
            />

        </Container>
    )
}


const Container = styled.View`
flex: 3;


`
const ImageCapa = styled.Image`
width: 100%;
flex: 1;

`