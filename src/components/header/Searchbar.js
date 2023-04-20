import { FiSearch } from 'react-icons/fi';
export const Searchbar = () => {

    return (
        <div className="row align-items-center  border border-1 rounded-2">
            <div className="col-10">
                <input placeholder="what are you looking for ?" className="w-100 border-0 inpOut" />
            </div>
            <div className="col-2 text-center fs-4">
                <FiSearch />
            </div>
        </div>
    )
}