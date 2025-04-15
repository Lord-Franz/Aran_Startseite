import Header from "../atoms/Header.tsx";
import FootNote from "../atoms/FootNote.tsx";
import PictureLink from "../atoms/PictureLink.tsx";


const Home = () => {

    return (
        <div>
            <Header/>
            <PictureLink link={"/"} alt={"Test"} src={"Landkarte_Test.png"}/>
            <FootNote/>
        </div>
    );
};
export default Home;


