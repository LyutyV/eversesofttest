import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    constructor(private http: HttpClient) {}

    /**
     * Fetch a single pokemon from API
     * @param id id or name of the pokemon
     * @returns pokemon
     *
     * @url https://pokeapi.co/docs/v2#pokemon
     */
    getOne(id: number | string) {
        return lastValueFrom(this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`));
    }
}
