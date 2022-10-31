import React, { useState } from 'react';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
interface options {
    'a-z': string[];
    'z-a': string[];
}

const Navigation = () => {
    const genres: string[] = ['All', 'Documentaruy', 'Comedy', 'Horror', 'Crime'];

    const genresItems = genres.map((genre) => {
        return (
            <div key={uuidv4()} className="navbar">
                <a className="genres__sorter genres__sorter__ltr" href="#">
                    {' '}
                    {genre}
                </a>
            </div>
        );
    });

    const [players, setPlayers] = useState<Array<string>>(['a', 'b', 'c', 'd', 'e', 'f']);

    const sortPlayers = (selectEvent: React.ChangeEvent<HTMLSelectElement>) => {
        const options: options = {
            'a-z': [...players].sort((a, b) => (a < b ? -1 : 1)),
            'z-a': [...players].sort((a, b) => (a < b ? 1 : -1)),
        };
        console.log(selectEvent.target.value);
    };

    return (
        <>
            <div className="navigation__wrap">
                <div className="nav__wrap">
                    <div className="genres__sorter__wrap">{genresItems}</div>
                    <div className="usualSorter__wrap">
                        <div className="usualSorter__block">Sort By</div>
                        <select className="usualSorter" onChange={sortPlayers}>
                            <option value="Release Date">Release Date</option>
                            <option value="Any Sort">Any Sort</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
