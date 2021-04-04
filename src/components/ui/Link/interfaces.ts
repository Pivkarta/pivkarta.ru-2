import { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = {
  href: NextLinkProps['href']
  title?: string
  className?: string
}
