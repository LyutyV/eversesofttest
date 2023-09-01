import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, debounceTime, lastValueFrom } from 'rxjs';
import { IPokemonsResult } from '../_interfaces/pokemonsResult.interface';
import { IPokemon } from '../_interfaces/pokemon.interface';

@Injectable({
    providedIn: 'root',
})
export class PaginatorService {
    private readonly itemsPerPage: number = 6;
    private readonly pageKeyName: string = 'currentPage';
    private totalItemsCount: number = 0;
    public totalPagesCount: number = 1;
    public prevExists: boolean = false;
    public nextExists: boolean = false;
    public currentPage: BehaviorSubject<number>;
    public currentPokemons: BehaviorSubject<IPokemon[]>;

    constructor(private http: HttpClient) {
        this.currentPage = new BehaviorSubject<number>(1);
        this.currentPokemons = new BehaviorSubject<IPokemon[]>([]);

        // Subscribe to changes in the current page with debounce (to aviod overrequesting backend)
        this.currentPage.pipe(debounceTime(400)).subscribe((page) => {
            const offset = (page - 1) * this.itemsPerPage;
            // Fetch Pokemons data based on the current page
            this.get(offset);
        });
    }

    // Fetch Pokemons data from the API based on offset and limit
    private async get(offset = 0, limit = this.itemsPerPage): Promise<IPokemon[]> {
        const pokemonsResult = await lastValueFrom(this.http.get<IPokemonsResult>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`));
        // update state of pokemons list with each request (if state will be dynamically changed on backend)
        this.totalItemsCount = pokemonsResult.count;
        this.totalPagesCount = Math.ceil(this.totalItemsCount / this.itemsPerPage);
        this.prevExists = !!pokemonsResult.previous;
        this.nextExists = !!pokemonsResult.next;
        this.currentPokemons.next(pokemonsResult.results);
        return pokemonsResult.results;
    }

    // Check if the current page is the first page
    public get isFirstPage(): boolean {
        return !this.prevExists;
    }

    // Check if the current page is the last page
    public get isLastPage(): boolean {
        return !this.nextExists;
    }

    // Go to the first page
    public first(): void {
        this.currentPage.next(1);
    }

    // Go to the previous page
    public previous(): void {
        this.currentPage.next(this.currentPage.value - 1);
    }

    // Go to the next page
    public next(): void {
        this.currentPage.next(this.currentPage.value + 1);
    }

    // Go to the last page
    public last(): void {
        this.currentPage.next(this.totalPagesCount);
    }
}
