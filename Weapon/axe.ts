import Weapon from "./weapon";
import IAttack from "../Action/attack";

export default class Axe extends Weapon{
    attack(action: IAttack): void{}
}