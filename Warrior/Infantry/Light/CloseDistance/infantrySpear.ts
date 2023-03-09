import LightInfantry from "../lightInfantry"
import Spear from "../../../../Weapon/spear"
import IRun from "../../../../Action/run";
import IAttack from "../../../../Action/attack";
import IDefend from "../../../../Action/defend";

export default class InfantrSpear extends LightInfantry{
    spear: Spear;
    constructor(spear: Spear, health: number, stamina: number){
        super(health, stamina)
        this.spear = spear;
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