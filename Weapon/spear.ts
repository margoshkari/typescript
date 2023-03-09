import Weapon from "./weapon";
import IAttack from "../Action/attack";

export default class Spear extends Weapon{
    attack(action: IAttack): void{}
}