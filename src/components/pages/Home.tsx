import Header from "../atoms/Header.tsx";
import Footer from "../atoms/Footer.tsx";
import NamedPictureLink from "../molecules/NamedPictureLink.tsx";


const Home = () => {

    return (
        <div>
            <Header/>
            <div className={"grid grid-cols-3 mt-auto gap-x-5 px-10"}>
                <NamedPictureLink label={"Landkarte"} color={""} link={"https://map.land-von-aran.de/"} src={"Landkarte.png"} alt={"Landkarte von Aran"}/>
                <NamedPictureLink label={"Forum"} color={"bg-[#563045]"} link={"https://land-von-aran.de/forum/"} src={"Forum.png"} alt={""}/>
                <NamedPictureLink label={"Wiki"} color={"bg-[#563045]"} link={"https://land-von-aran.de/wiki/index.php?title=Hauptseite"} src={"Wiki.png"} alt={""}/>

            </div>
            <div className={"h-[50vw] grid grid-flow-col grid-rows-3 grid-cols-5 pt-5 px-5"}>
                <iframe className={"w-full h-full row-span-3 col-span-4"} src={"https://www.youtube.com/embed/Q3fSABkZf3E"} allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"} allowFullScreen title={"Aran Trailer"}/>
                <div className={""}>
                    <NamedPictureLink label={"Discord"} color={""} link={"https://discord.com/invite/rycTSt5Ghd"} src={"Discord_Icon.svg"} alt={"Discord Logo"}/>
                    <NamedPictureLink label={"Youtube"} color={""} link={"https://www.youtube.com/@land-von-aran9894"} src={"youtube_icon.svg"} alt={"Youtube Logo"}/>
                    <NamedPictureLink label={"Instagram"} color={""} link={"/instagram"} src={"instagram_icon.svg"} alt={"Instagram Logo"}/>
                </div>
            </div>

            <Footer/>
        </div>
    );
};
export default Home;


