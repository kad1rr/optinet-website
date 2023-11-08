const Link = ({ text, href }) => {
    return (
        <a href={href} className="uppercase font-grotesk hover:underline underline-offset-4">
            {text}
        </a>
    )
}

export default Link