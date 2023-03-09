import HardInfantry from "./HardInfantry"
import IAction from "../../../Action/action"
import TwoHandedSword from "../../../Weapon/twoHandedSword"
import IRun from "../../../Action/run";
import IAttack from "../../../Action/attack";
import IDefend from "../../../Action/defend";

export default class InfantrySword extends HardInfantry{
    twoHandedSword: TwoHandedSword;
    constructor(twoHandedSword: TwoHandedSword, health: number, stamina: number){
        super(health, stamina)
        this.twoHandedSword = twoHandedSword;
    }
    run(action: IRun):void{
        action.run()
    }
    attack(action: IAttack):void{
        action.attack()
    }
    defence(action: IDefend):void{
        action.defend()
    }
}