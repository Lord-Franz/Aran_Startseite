import PictureLink from "../atoms/PictureLink.tsx";

type NamedPictureLinkProps = {
    label: string;
    link: string
    src: string
    alt: string
}

const NamedPictureLink = ({label, link, src, alt}: NamedPictureLinkProps) => {
    return (
        <div className={"h-full flex flex-col align-middle dark:text-white"}>
            {label}
            <PictureLink link={link} src={src} alt={alt}/>
        </div>
    );
}; export default NamedPictureLink;