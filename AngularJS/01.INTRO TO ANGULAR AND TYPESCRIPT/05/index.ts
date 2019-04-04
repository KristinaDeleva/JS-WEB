class Box<T> {
    private _boxes = [];

    public add(el: T) {
        this._boxes.push(el);
    }

    public remove() {
        this._boxes.pop();
    }

    get count(): number {
        return this._boxes.length;
    }
}

export default Box;

let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count); //2
box.remove();
console.log(box.count);//1

