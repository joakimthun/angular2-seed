import * as $ from 'jquery'

export class InfiniteScrollComponent { 
    private numberOfItemsToLoadOnScroll: number; 
    public numberOfItemsToLoad: number;

    constructor(numberOfItemsToLoad: number, numberOfItemsToLoadOnScroll: number) {
        this.numberOfItemsToLoadOnScroll = numberOfItemsToLoadOnScroll;
        this.numberOfItemsToLoad = numberOfItemsToLoad;

        let that = this;

        $(window).scroll(function (event) {
            let distanceFromBottom = Math.floor($(document).height() - $(document).scrollTop() - $(window).height());

            if(distanceFromBottom < 200) {
                that.loadMoreItems();
            }
        });
    }

    loadMoreItems() : void {
        this.numberOfItemsToLoad += this.numberOfItemsToLoadOnScroll;
    }

    getNumberOfItems() : number {
        return this.numberOfItemsToLoad;
    }
}