import IAttack from "../Action/attack";

export default interface IWeapon{
    attack(attack: IAttack):void;
}