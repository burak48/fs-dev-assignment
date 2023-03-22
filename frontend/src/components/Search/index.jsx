import React from 'react';

function Search(props) {
    return (
        <form onSubmit={props.onSearch} className="flex items-center justify-center mt-8">
            <div className="flex flex-row items-center w-full max-w-xs">
                <input
                    type="text"
                    placeholder="Enter search query"
                    value={props.query}
                    onChange={props.onInputChange}
                    className="w-full px-3 py-2 text-gray-700 rounded-lg focus:outline-none focus:bg-white focus:shadow-outline" />
                <button
                    type="submit"
                    className="ml-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                    Search
                </button>
            </div>
        </form>
    );
}

export default Search;
