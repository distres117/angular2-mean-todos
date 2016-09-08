export class Todo{
    text:string;
    isCompleted: boolean = false;
    _id:string;
    constructor(text:string){
        this.text = text;
    }
}