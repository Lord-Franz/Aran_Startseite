type PictureLinkProps = {
    link: string;
    src: string;
    alt: string;
}

const PictureLink = ({link, src, alt} : PictureLinkProps ) => {
    return (
        <a href={link}>
            <img src={src} alt={alt} className={"rounded-2xl"}/>
        </a>
    );
}; export default PictureLink;