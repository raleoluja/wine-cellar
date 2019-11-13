export class Wine{
    _id: number;
    name: string;
    year: number;
    grapes: string;
    country:string;
    region: string;
    description: string;
    picture: string;

    constructor (obj? : any){
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null;
        this.year = obj && obj.year || null;
        this.grapes = obj && obj.grapes || null;
        this.country = obj && obj.country || null;
        this.region = obj && obj.region || null;
        this.description = obj && obj.description || null;
		this.picture = obj && obj.picture || null;
    }
}