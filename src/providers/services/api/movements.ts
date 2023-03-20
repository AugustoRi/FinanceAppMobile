import type { MovementsModel } from '../../../models/Movements'
import { MovementsType } from '../../../models/Movements'

export const List: MovementsModel[] = [
  {
    id: 1,
    label: 'Boleto Conta Luz',
    value: '120,64',
    date: '2023-03-08',
    type: MovementsType.OUTPUT,
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '2023-03-16',
    type: MovementsType.OUTPUT,
  },
  {
    id: 3,
    label: 'Salário',
    value: '12.500,00',
    date: '2023-04-01',
    type: MovementsType.INPUT,
  },
]