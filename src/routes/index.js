import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PokemonDetails from "../pages/PokemonDetails";
import Team from "../pages/Team";

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
        name: 'TeamStats',
        path: '/team',
        element: <Team />
    },
    {
        name: '404',
        path: '*',
        element: <NotFound />
    }
]