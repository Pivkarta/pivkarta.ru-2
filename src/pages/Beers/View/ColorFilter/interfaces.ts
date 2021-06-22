/**
 * Варианты цветов пива.
 */
// TODO В API сейчас для этого параметра нет списка вариантов, только просто строка. Хорошо бы добавить там.
export type BeerColor = 'Светлое' | 'Темное' | 'Полутемное' | undefined

export type BeersColorFilterProps = {
  color: BeerColor
}
