import { Tile } from './program-page-tile.component';

class Grid {
    tiles: Tile[] = [];
    numberOfColumns = 3;

    constructor(data: any[]) {
        data.forEach(e => this.addElement(e));
    }

    addElement(tile: Tile) {
        this.tiles.push(tile);
    }

    getPrimary(): Tile[] {
        const lastPrimary =
            this.tiles.length > this.numberOfColumns * 2 ? this.numberOfColumns * 2 : this.tiles.length;
        const primaryElements = this.tiles.slice(0, lastPrimary);
        this.formatElements(primaryElements);
        return primaryElements;
    }
    getSecondary(): any {
        if (this.tiles.length > this.numberOfColumns * 2) {
            const secondaryElements = this.tiles.slice(this.numberOfColumns * 2, this.tiles.length);
            this.formatElements(secondaryElements);
            return secondaryElements;
        }
        return null;
    }

    formatElements(elements) {
        let fontSize = 1;
        if (elements.length > 0) {
            const sortedByTitleEls = Object.assign([], elements);
            sortedByTitleEls.sort((a, b) => b.data.Title.length - a.data.Title.length);
            const longestTitleLenght = sortedByTitleEls[0].data.Title.length;
            if (this.numberOfColumns > 3 && longestTitleLenght > 23) { fontSize = 23 / longestTitleLenght; }
        }

        elements.forEach((element, idx) => {
            element.columnWidth = 12 / this.numberOfColumns;
            element.FontSize = fontSize;
        });
    }
}
