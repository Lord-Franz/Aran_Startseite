import Header from "../atoms/Header.tsx";
import FootNote from "../atoms/FootNote.tsx";
import NamedPictureLink from "../molecules/NamedPictureLink.tsx";


const Home = () => {

    return (
        <div>
            <Header/>
            <div className={"grid grid-cols-3 gap-x-10 px-10"}>
                <NamedPictureLink label={"Landkarte"} link={"https://map.land-von-aran.de/"} src={"Landkarte.png"} alt={"Landkarte von Aran"}/>
                <NamedPictureLink label={"Forum"} link={"https://land-von-aran.de/forum/"} src={"Landkarte.png"} alt={""}/>
                <NamedPictureLink label={"Wiki"} link={"https://land-von-aran.de/wiki/index.php?title=Hauptseite"} src={"Landkarte.png"} alt={""}/>
                <NamedPictureLink label={"Discord"} link={"https://discord.com/invite/rycTSt5Ghd"} src={"Landkarte.png"} alt={""}/>
                <NamedPictureLink label={"Youtube"} link={"/youtube"} src={"Landkarte.png"} alt={""}/>
                <NamedPictureLink label={"Instagram"} link={"/instagram"} src={"Landkarte.png"} alt={""}/>
            </div>

            <FootNote/>
        </div>
    );
};
export default Home;


