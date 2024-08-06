import React from 'react'
import { User } from '../../../../util/Users/types'

interface UserListeItemProps {
  user: User
}
function UserListItem({ user }: UserListeItemProps) {
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  )
}

export default UserListItem