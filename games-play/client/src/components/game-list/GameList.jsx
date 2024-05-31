import { useEffect, useState } from "react";
import * as gameService from '../../services/gameService';
import GameListItem from "./game-list-item/GameListItem";

export default function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
        .then(result => setGames(result));
    }, []);

    // console.log(games);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {/* <!-- Display div: with information about every game (if any) --> */}
            {/* key={game._id} is absolutelly mandatory */}
            {/* {...game} is instead of title=game.title, category=game.category atc. */}
            {games.map(game => {
                <GameListItem key={game._id} {...game} />
            })}

            {/* <!-- Display paragraph: If there is no games  --> */}
            {games.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
}