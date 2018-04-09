import { Component, Injectable, OnInit } from '@angular/core';
import { Tile, TilesComponentModel } from '../program-page-tiles/program-page-tile.component';

@Component({
    selector: 'app-monitor-improve',
    templateUrl: 'monitorImprove.html',
    styleUrls: ['monitorImprove.scss'],
})
@Injectable()
export class MonitorImproveComponent implements OnInit {
    tilesModel: TilesComponentModel;
    ngOnInit() {
        const tiles  = [
            new Tile('exclamation', 'Title', 10, 10),
            new Tile('exclamation', 'Some other Title', 10, 10),
            new Tile('exclamation', 'Title', 10, 10),
            new Tile('exclamation-circle', 'Title', 10, 10),
            new Tile('exclamation', 'Title', 10, 10),
            new Tile('exclamation', 'Title', 10, 10),
        ];
        this.tilesModel =  new TilesComponentModel(tiles, 10, 10, 1);
    }
}
