import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star-component.html',
    styleUrls: ['./start-component.css']
})

export class StartComponent implements OnChanges{
    ngOnChanges(): void {
        this.cropWidth=this.rating * 75/5;
    }
    @Input() rating: number=0;

    cropWidth: number=75;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void{
        this.ratingClicked.emit(`the rating ${this.rating} clicked`);
    }
}