import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PokemonDetails from "../pages/PokemonDetails";

export const routes = [
    {
        name: 'Homepage',
        path: '/',
        element: <Home />
    },
    {
        name: 'PokemonDetails',
        path: '/pokemon/:name',
        element: <PokemonDetails />
    },
    {
        name: '404',
        path: '*',
        element: <NotFound />
    }
]