import { IPokemon } from './pokemon.interface';

export interface IPokemonsResult {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPokemon[];
}
