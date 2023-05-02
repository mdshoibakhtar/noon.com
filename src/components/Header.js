import { Location } from "./header/location/Location"
import { Searchbar } from "./header/Searchbar"

export const Header = () => {
    return (
        <nav className="pt-2 px-3 mx-1 mt-2 mb-1">
            <Searchbar />
            <Location />
        </nav>
    )
}