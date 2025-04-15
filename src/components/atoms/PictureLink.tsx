type PictureLinkProps = {
    link: string;
    src: string;
    alt: string;
}

const PictureLink = ({link, src, alt} : PictureLinkProps ) => {
    return (
        <a href={link}>
            <img src={src} alt={alt} className={"rounded-3xl h-1/5 w-1/6"}/>
        </a>
    );
}; export default PictureLink;