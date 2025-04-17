import PictureLink from "../atoms/PictureLink.tsx";

type NamedPictureLinkProps = {
    label: string;
    color: string;
    link: string
    src: string
    alt: string
}

const NamedPictureLink = ({label, color, link, src, alt}: NamedPictureLinkProps) => {
    return (
        <div className={"h-full flex flex-col dark:text-white"}>
            {label}
            <a href={link} className={color + " h-full w-full rounded-2xl flex items-center justify-center"}>
                <PictureLink src={src} alt={alt}/>
            </a>
        </div>
    );
}; export default NamedPictureLink;