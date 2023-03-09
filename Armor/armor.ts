import IArmor from "./IArmor"
import IDefend from "../Action/defend";

export default abstract class Armor implements IArmor{
    blockDamage: number;
    constructor(blockDamage: number){
        this.blockDamage = blockDamage;
    }
    defence(defence: IDefend): void{}
}