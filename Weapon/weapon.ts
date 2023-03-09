import IWeapon from "./iweapon"
import IAttack from "../Action/attack";

export default abstract class Weapon implements IWeapon{
    damage:number;
    weight: number;
    radius: number;
    constructor(damage:number, weight: number, radius: number) {
        this.damage = damage;
        this.weight = weight;
        this.radius = radius;
    }
    attack(action: IAttack):void{}
}