import { Component, HostListener, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/_interfaces/pokemon.interface';
import { PaginatorService } from 'src/app/_services/paginator.service';

@Component({
    selector: 'pokemon-list',
    templateUrl: 'pokemon-list.component.html',
    styleUrls: ['pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
    public pokemons: IPokemon[] | undefined;

    constructor(private paginatorService: PaginatorService) {}

    ngOnInit(): void {
        // Subscribe to changes in the current list of Pokemons from the paginator service
        this.paginatorService.currentPokemons.subscribe((pokemons) => {
            this.pokemons = pokemons;
        });
    }

    // Listen for scroll events to provide scrolling functionality for paginator when pokemons list window is active
    @HostListener('wheel', ['$event']) onWindowScroll(event: any) {
        // Handle scroll events to navigate between pages if applicable
        if (event.deltaY < 0 && this.paginatorService.nextExists) {
            this.paginatorService.next();
        } else if (event.deltaY > 0 && this.paginatorService.prevExists) {
            this.paginatorService.previous();
        }
    }
}
