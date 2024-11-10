import Presentation from "../components/Presentation";
import { PresentationColumn } from "../components/Presentation.styles";


export default function Home(){
    return (
        <>
        <Presentation>
            <PresentationColumn>1</PresentationColumn>
            <PresentationColumn>2</PresentationColumn>
        </Presentation>
        
        </>
    )
}