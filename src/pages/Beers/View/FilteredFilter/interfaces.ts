/**
 * Варианты фильтрации пива.
 */

export type BeerFiltered = 'Фильтрованное' | 'Нефильтрованное' | undefined

export type BeersFilteredFilterProps = {
  filtered: BeerFiltered
}
