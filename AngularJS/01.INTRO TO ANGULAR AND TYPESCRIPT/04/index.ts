abstract class Melon {
    constructor(public weight:number, public melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

export class Watermelon extends Melon {
    public element = 'Water';

    constructor(weight:number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString() {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}

export class Firemelon extends Melon {
    public element = 'Fire';

    constructor(weight:number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString() {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}

export class Earthmelon extends Melon {
    public element = 'Earth';

    constructor(weight:number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString() {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}

export class Airmelon extends Melon {
    public element = 'Air';

    constructor(weight:number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString() {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
