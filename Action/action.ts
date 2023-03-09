import Attack from "./attack"
import Defend from "./defend"
import Run from "./run"

export default interface IAction{
    run(action: Run):void;
    attack(action: Attack):void;
    defence(action: Defend):void;
}

