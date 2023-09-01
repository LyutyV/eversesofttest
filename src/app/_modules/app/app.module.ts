import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../../_components/root/app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from '../../_components/pokemons-list/pokemon-list.component';
import { PaginatorComponent } from 'src/app/_components/paginator/paginator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonOverviewComponent } from 'src/app/_components/pokemon-overview/pokemon-overview.component';

@NgModule({
    declarations: [AppComponent, PokemonListComponent, PaginatorComponent, PokemonOverviewComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
