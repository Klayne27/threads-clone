import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div>
            <Link  to="markzuckerberg">
                <button>go to profile</button>
            </Link>
        </div>
    )
}

export default HomePage
