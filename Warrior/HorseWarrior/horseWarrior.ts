import Warrior from "../warrior"
import IRun from "../../Action/run"
import IAttack from "../../Action/attack"
import IDefend from "../../Action/defend"

export default abstract class HorseWarrior extends Warrior{
    abstract run(action: IRun):void
    abstract attack(action: IAttack):void
    abstract defence(action: IDefend):void
}