import Warrior from "../../warrior"
import IAttack from "../../../Action/attack"
import IDefend from "../../../Action/defend"
import IRun from "../../../Action/run"

export default abstract class HardInfantry extends Warrior{
    abstract run(action: IRun):void
    abstract attack(action: IAttack):void
    abstract defence(action: IDefend):void
}