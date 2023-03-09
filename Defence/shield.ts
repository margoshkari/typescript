import IShield from "./ishield"
import IDefend from "../Action/defend";
export default class Shield implements IShield{
    blockDamage: number;
    constructor(blockDamage: number){
        this.blockDamage = blockDamage;
    }
    defence(defence: IDefend): void {
        
    }
}