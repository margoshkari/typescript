import IAction from "../Action/action"
import IAttack from "../Action/attack";
import IDefend from "../Action/defend";
import IRun from "../Action/run";

export default abstract class Warrior implements IAction{
    health: number;
    stamina: number;
    constructor(health: number, stamina: number){
        this.health = health;
        this.stamina = stamina;
    }
    abstract run(action: IRun):void
    abstract attack(action: IAttack):void
    abstract defence(action: IDefend):void
} 