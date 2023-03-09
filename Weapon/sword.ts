import Weapon from "./weapon";
import IAttack from "../Action/attack";

export default class Sword extends Weapon{
    attack(action: IAttack): void{}
}