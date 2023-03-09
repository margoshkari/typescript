import LightInfantry from "../lightInfantry"
import Saber from "../../../../Weapon/saber"
import IRun from "../../../../Action/run";
import IAttack from "../../../../Action/attack";
import IDefend from "../../../../Action/defend";

export default class InfantrSaber extends LightInfantry{
    saber: Saber;
    constructor(saber: Saber, health: number, stamina: number){
        super(health, stamina)
        this.saber = saber;
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