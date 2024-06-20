export abstract class Technic{
    public name: string | undefined;
    public visibility: boolean = false;
    public imgPath: string | undefined;
    constructor(imgPath: string, name: string){
        this.imgPath = imgPath;
        this.name = name;
    }
}