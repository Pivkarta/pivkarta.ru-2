import React from 'react'
import { AppDataQuery } from 'src/modules/gql/generated'

export type AppContextValue = {
  /**
   * Основные API-данные приложения
   */
  appData: AppDataQuery | undefined
}

export const AppContext = React.createContext<AppContextValue | null>(null)
