export class NumberEvent {
  constructor(public number: number, public type: NumberType, public content: string) {}
}

export enum NumberType {
  EVEN  = 'even', ODD = 'odd'
}
