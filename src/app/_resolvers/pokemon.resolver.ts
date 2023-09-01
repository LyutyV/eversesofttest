import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { IPokemon } from '../_interfaces/pokemon.interface';
import { PokemonService } from '../_services/pokemon.service';

export const pokemonResolver: ResolveFn<IPokemon> = async (route: ActivatedRouteSnapshot) => {
    const pokemonService = inject(PokemonService);
    const pokemonName = route.params['name'];
    const pokemon = await pokemonService.getOne(pokemonName);
    return pokemon as IPokemon;
};
