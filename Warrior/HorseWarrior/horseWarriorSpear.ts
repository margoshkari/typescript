import HorseWarrior from "./HorseWarrior"
import Spear from "../../Weapon/spear"
import IRun from "../../Action/run"
import IAttack from "../../Action/attack"
import IDefend from "../../Action/defend"

export default class HorseWarriorBow extends HorseWarrior{
    spear: Spear;
    constructor(spear: Spear, health: number, stamina: number){
        super(health, stamina)
        this.spear = spear;
    }
    run(action: IRun):void{}
    attack(action: IAttack):void{}
    defence(action: IDefend):void{}
}