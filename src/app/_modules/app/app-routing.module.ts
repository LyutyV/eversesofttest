import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from '../../_components/pokemons-list/pokemon-list.component';
import { PokemonOverviewComponent } from 'src/app/_components/pokemon-overview/pokemon-overview.component';
import { pokemonResolver } from 'src/app/_resolvers/pokemon.resolver';

const routes: Routes = [
    {
        path: '',
        component: PokemonListComponent,
    },
    {
        path: ':name',
        component: PokemonOverviewComponent,
        resolve: {
            pokemon: pokemonResolver,
        },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
