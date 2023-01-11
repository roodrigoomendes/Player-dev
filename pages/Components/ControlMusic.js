import { slider } from 'react-native';
import  styled  from 'styled-components/native';
import PlayIcon from '../../assets/Icon/PlayIcon';
import BackIcon from './../../assets/Icon/BackIcon';
import ForwardIcon from './../../assets/Icon/ForwardIcon';




export default function ControlMusic(){
    return(
        <Container>

                <SlideContianer>

           
                <AudioSlider
                    thumbTintColor="#FFFFFF"
                    minimumTrackTintColor="#1DD65F"
                    maximumTrackTintColor="#777777"
                    minimumValue={0}
                    maximumValue={100}
                    />

                    
                </SlideContianer>
            <ControlSlide>


                <CorrentTime>
                    00:01
                </CorrentTime>
                <TotalTime>
                    59:00
                </TotalTime>
            </ControlSlide>

            <ContainerControl>
                <ContainerBack>
                    <BackIcon/>
                </ContainerBack>

                <ContainerPlay>
                    <PlayIcon/>
                </ContainerPlay>
                
                <ContainerForward>
                    <ForwardIcon/>
                </ContainerForward>

            </ContainerControl>
        </Container>
    )
}


const Container = styled.View`

flex-direction: column;
flex: 1;
padding:0px 40px;
`

const SlideContianer = styled.View`


`

const AudioSlider = styled.Slider`

`;

const ContainerPlay = styled.TouchableOpacity`

`;

const ContainerBack = styled.TouchableOpacity`

`;

const ContainerForward = styled.TouchableOpacity`

`;
const ContainerControl = styled.View`
    flex-direction: row;

    align-items: center;
    justify-content: space-around;
    
`

const ControlSlide = styled.View`

    flex-direction: row;
    margin-bottom: 5px;
    align-items: center;
    justify-content: space-between;

`

const CorrentTime = styled.Text`
color: #bbb;
font-size: 18px;
`

const TotalTime = styled.Text`
color: #bbb;
font-size: 18px;

`