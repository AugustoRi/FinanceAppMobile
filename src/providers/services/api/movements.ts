enum MovementType {
  OUTPUT = 0,
  INPUT = 1,
}

interface MovementList {
  id: number
  label: string
  value: string
  date: string
  type: MovementType
}

export const list: MovementList[] = [
  {
    id: 1,
    label: 'Boleto Conta Luz',
    value: '120,64',
    date: '2023-03-08',
    type: MovementType.OUTPUT,
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '2023-03-16',
    type: MovementType.OUTPUT,
  },
  {
    id: 3,
    label: 'Salário',
    value: '12.500,00',
    date: '2023-04-01',
    type: MovementType.INPUT,
  },
]