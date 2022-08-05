import Footer from "./footer.component";
import Header from "./headre.component"
const Welcome=(props)=>{

return(
    <>
    Weclome {props.name}
    <Header/>
    <Footer/>
    </>
)
}

export default Welcome;