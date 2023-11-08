const CButtonLink = ({ text, href }) => {
    return (
        <a href={href} className="px-6 py-2 uppercase font-grotesk text-decoration-black hover:underline underline-offset-4 bg-white text-black rounded-full">
            {text}
        </a>
    )
}

export default CButtonLink