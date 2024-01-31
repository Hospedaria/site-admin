import { KeyValue } from "@angular/common";

export enum Suite {
  Amarela = 1,
  Vermelha = 2,
  Azul = 3,
  Verde = 4,
  Chale = 5
}

export const SuitesMap: KeyValue<number, string>[] = [
  { key: Suite.Amarela, value: 'Amarela'},
  { key: Suite.Vermelha, value: 'Vermelha'},
  { key: Suite.Azul, value: 'Azul'},
  { key: Suite.Verde, value: 'Verde'},
  { key: Suite.Chale, value: 'Chalé'},
];
