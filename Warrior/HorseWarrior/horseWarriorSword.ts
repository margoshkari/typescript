import HorseWarrior from "./HorseWarrior"
import Sword from "../../Weapon/sword"
import IRun from "../../Action/run"
import IAttack from "../../Action/attack"
import IDefend from "../../Action/defend"

export default class HorseWarriorBow extends HorseWarrior{
    sword: Sword;
    constructor(sword: Sword, health: number, stamina: number){
        super(health, stamina)
        this.sword = sword;
    }
    run(action: IRun):void{ 
        action.run()
    }
    attack(action: IAttack):void{}
    defence(action: IDefend):void{}
}