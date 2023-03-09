import HardInfantry from "./HardInfantry"
import Halberd from "../../../Weapon/halberd"
import IRun from "../../../Action/run";
import IAttack from "../../../Action/attack";
import IDefend from "../../../Action/defend";

export default class InfantryHalberd extends HardInfantry{
    halberd: Halberd;
    constructor(halberd: Halberd, health: number, stamina: number){
        super(health, stamina)
        this.halberd = halberd;
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