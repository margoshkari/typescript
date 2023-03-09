import Weapon from "./weapon";
import IAttack from "../Action/attack";

export default class Saber extends Weapon{
    attack(action: IAttack): void{}
}