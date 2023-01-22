import { ScreenContainer, Header, Footer } from "./style";
import Logout from "../../styles/Image/Out.png"
import Movimentation from "../../Components/Movimentation";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage(){
    const { userInfo, setUserInfo} = useContext(AuthContext)
    const name = localStorage.getItem("name")
    const userName = name || userInfo.name
    const navigate = useNavigate();

    function logout(){
        setUserInfo([])
        localStorage.clear()
        navigate("/")
    }
    
    return (
        <ScreenContainer>
            <Header>
                <p>Olá, {userName}</p>
                <img src={Logout} alt="Logout" onClick={logout}/>
                
            </Header>
            <Movimentation
            userInfo={userInfo}
           
            />
            <Footer>
                <Link to={"/nova-entrada"}>
                     <div>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova <br/> Entrada</p>
                     </div>
                </Link>

                <Link to={"/nova-saida"}>
                    <div>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p>Nova <br/> saida</p>
                    </div>
                </Link>
                
            </Footer>

        </ScreenContainer>
    )
}