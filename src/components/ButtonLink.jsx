const ButtonLink = ({ text, href }) => {
    return (
        <a href={href} className="px-6 py-2 uppercase font-grotesk hover:underline underline-offset-4 bg-gradient-to-r from-[#40DB5C] to-[#03C7FD] rounded-full">
            {text}
        </a>
    )
}

export default ButtonLink