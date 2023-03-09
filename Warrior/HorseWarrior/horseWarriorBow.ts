import HorseWarrior from "./HorseWarrior"
import Bow from "../../Weapon/bow"
import IRun from "../../Action/run"
import IAttack from "../../Action/attack"
import IDefend from "../../Action/defend"

export default class HorseWarriorBow extends HorseWarrior{
    bow: Bow;
    constructor(bow: Bow, health: number, stamina: number){
        super(health, stamina)
        this.bow = bow;
    }
    run(action: IRun):void{}
    attack(action: IAttack):void{
       action.attack()
    }
    defence(action: IDefend):void{}
}