import { NextSeo } from 'next-seo'
import React from 'react'
import { Page } from '../_App/interfaces'
import ContactsPageView from './View'

/**
 * Страница контактов
 */
const ContactsPage: Page = () => {
  return (
    <>
      <NextSeo title="Контакты" description="Контакты Пивной карты" />

      <ContactsPageView />
    </>
  )
}

export default ContactsPage
