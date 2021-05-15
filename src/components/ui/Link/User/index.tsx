import React, { useMemo } from 'react'
import { imageFormats } from 'src/helpers/imageFormats'

import Link from '..'
import { UserLinkProps } from './interfaces'
import { UserLinkStyled } from './styled'

/**
 * Ссылка на страницу пользователя
 */
const UserLink: React.FC<UserLinkProps> = ({
  user,
  showName = true,
  showAvatar = true,
  ...other
}) => {
  return useMemo(() => {
    return (
      <UserLinkStyled {...other}>
        <Link
          href={`/profile/${user.username}`}
          title={user.fullname || user.username || undefined}
        >
          {showAvatar && user.image && (
            <img
              src={'https://pivkarta.ru/' + imageFormats(user.image, 'thumb')}
              className="avatar"
            />
          )}{' '}
          {showName && (user.fullname || user.username)}
        </Link>
      </UserLinkStyled>
    )
  }, [other, showAvatar, showName, user.fullname, user.image, user.username])
}

export default UserLink
