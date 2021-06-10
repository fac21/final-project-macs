import Link from "next/link"

const notFound = () => {
    return (
        <div>
        <h1>Ooops...</h1>
        <h2>That page can not be found!</h2>
        <p>Go back to the 
        <Link href="/">
        <a>Home</a>
        </Link>
        </p>
        </div>
    )
}

export default notFound;
