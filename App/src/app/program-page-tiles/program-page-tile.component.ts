import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-program-page-tile',
  templateUrl: 'program-page-tile.component.html',
  styleUrls: ['program-page-tile.component.scss']
})
export class ProgramPageTileComponent implements OnInit {
  @Input() tile: Tile;
  @Input() columnWidth: 3;
  @HostBinding('class') hostClass: string;
  @HostBinding('style.padding') hostPading: string;
  ngOnInit() {
    this.hostClass = 'col-md-4';
    this.hostPading = '0';
  }
  removeSpaces(value: string) {
    return value.replace(' ', '');
  }
}

export class TilesComponentModel {
  columnWidth = 4;
  totalConutLabel: 'Total Count';
  totalAmountLabel: 'Total Amount';
  constructor(
    public tiles: Tile[],
    public totalCount: number,
    public totalAmount: number,
    public fontSize: number
  ) { }

 }
 export class Tile {
   countLabel = 'Conut';
   amountLabel = 'Amount';
   constructor(
     public iconName: string,
     public title: string,
     public count: number,
     public amount: number,
     public type: string = '',
   ) {
   }

 }
