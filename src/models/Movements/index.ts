export enum MovementsType {
  OUTPUT = 0,
  INPUT = 1,
}

export interface MovementsModel {
  id: number
  label: string
  value: string
  date: string
  type: MovementsType
}