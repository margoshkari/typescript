import HardInfantry from "./HardInfantry"
import Axe from "../../../Weapon/axe"
import IRun from "../../../Action/run";
import IAttack from "../../../Action/attack";
import IDefend from "../../../Action/defend";

export default class InfantryAxe extends HardInfantry{
    axe: Axe;
    constructor(axe: Axe, health: number, stamina: number){
        super(health, stamina)
        this.axe = axe;
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