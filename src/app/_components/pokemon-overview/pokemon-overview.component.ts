import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IPokemon } from 'src/app/_interfaces/pokemon.interface';

@Component({
    selector: 'pokemon-overview',
    templateUrl: 'pokemon-overview.component.html',
    styleUrls: ['pokemon-overview.component.scss'],
})
export class PokemonOverviewComponent implements OnInit {
    public pokemon: IPokemon | undefined;
    public form: FormGroup;

    constructor(private route: ActivatedRoute, public formBuilder: FormBuilder, private location: Location) {
        // Create a form group with initial disabled form controls
        this.form = this.formBuilder.group({
            name: { value: '', disabled: true },
            base_experience: { value: '', disabled: true },
            height: { value: '', disabled: true },
            weight: { value: '', disabled: true },
        });
    }

    ngOnInit(): void {
        // Get the Pokemon data from route resolver
        this.pokemon = this.route.snapshot.data['pokemon'];
        if (this.pokemon) {
            // Populate the form with Pokemon data
            this.form.patchValue({
                name: this.pokemon.name,
                base_experience: this.pokemon.base_experience,
                height: this.pokemon.height,
                weight: this.pokemon.weight,
            });
        }
    }

    // Navigate back in the browser history
    public goBack(): void {
        this.location.back();
    }
}
