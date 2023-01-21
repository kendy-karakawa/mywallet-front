import { ScreenContainer, Header, Footer } from "./style";
import Logout from "../../styles/Image/Out.png"
import Movimentation from "../../Components/Movimentation";

export default function HomePage(){
    return (
        <ScreenContainer>
            <Header>
                <p>Olá, Fulano</p>
                <img src={Logout} alt="Logout"/>
                
            </Header>
            <Movimentation/>
            <Footer>
                <div>
                <ion-icon name="add-circle-outline"></ion-icon>
                <p>Nova <br/> Entrada</p>
                </div>
                <div>
                <ion-icon name="remove-circle-outline"></ion-icon>
                <p>Nova <br/> saida</p>
                </div>
                
            </Footer>

        </ScreenContainer>
    )
}