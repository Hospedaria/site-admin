import { KeyValue } from "@angular/common";

export enum Suite {
  Amarela,
  Vermelha,
  Azul,
  Verde,
  Chale
}

export const SuitesMap: KeyValue<number, string>[] = [
  { key: Suite.Amarela, value: 'Amarela'},
  { key: Suite.Vermelha, value: 'Vermelha'},
  { key: Suite.Azul, value: 'Azul'},
  { key: Suite.Verde, value: 'Verde'},
  { key: Suite.Chale, value: 'Chalé'},
];
