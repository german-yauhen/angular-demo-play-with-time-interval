export class NumberEvent {
  constructor(number: number, type: NumberType, content: string) {}
}

export enum NumberType {
  EVEN, ODD
}
