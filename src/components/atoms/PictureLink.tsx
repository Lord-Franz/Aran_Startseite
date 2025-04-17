type PictureLinkProps = {
    src: string;
    alt: string;
}

const PictureLink = ({src, alt} : PictureLinkProps ) => {
    return (
        <img src={src} alt={alt} className={"h-full w-fit rounded-2xl"}/>
    );
}; export default PictureLink;