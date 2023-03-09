import HardInfantry from "./HardInfantry"
import MorningStar from "../../../Weapon/morningStart"
import Shield from "../../../Defence/shield"
import IRun from "../../../Action/run";
import IAttack from "../../../Action/attack";
import IDefend from "../../../Action/defend";

export default class InfantryMorningStar extends HardInfantry{
    morningStar: MorningStar;
    shield: Shield;
    constructor(morningStar: MorningStar, shield: Shield, health: number, stamina: number){
        super(health, stamina)
        this.morningStar = morningStar;
        this.shield = shield;
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