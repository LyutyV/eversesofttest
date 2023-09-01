import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PaginatorService } from 'src/app/_services/paginator.service';

@Component({
    selector: 'paginator',
    templateUrl: 'paginator.component.html',
    styleUrls: ['paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
    public currentPageInput = new FormControl('');

    constructor(public paginatorService: PaginatorService) {
        // Subscribe to changes in the current page number from the paginator service
        this.paginatorService.currentPage.subscribe((pageNumber) => {
            // Set the current page input value without emitting events
            this.currentPageInput.setValue(pageNumber.toString(), { emitEvent: false });
        });
    }

    ngOnInit(): void {
        // Subscribe to changes in the page input value
        this.currentPageInput.valueChanges.subscribe((pageValue) => {
            // Parse the input value to a number
            const page: number = Number.parseInt(pageValue!);
            if (!isNaN(page) && page >= 1 && page <= this.paginatorService.totalPagesCount) {
                // Update the current page in the paginator service
                this.paginatorService.currentPage.next(page);
            } else {
                // Reset the input value to the current page if input is invalid
                this.currentPageInput.setValue(this.paginatorService.currentPage.value.toString(), { emitEvent: false });
            }
        });
    }
}
