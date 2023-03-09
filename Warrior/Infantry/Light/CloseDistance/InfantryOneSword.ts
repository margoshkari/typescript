import LightInfantry from "../lightInfantry"
import OneHandedSword from "../../../../Weapon/oneHandedSword"
import IRun from "../../../../Action/run";
import IAttack from "../../../../Action/attack";
import IDefend from "../../../../Action/defend";

export default class InfantryOneSword extends LightInfantry{
    oneHandedSword: OneHandedSword;
    constructor(oneHandedSword: OneHandedSword, health: number, stamina: number){
        super(health, stamina)
        this.oneHandedSword = oneHandedSword;
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