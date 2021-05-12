import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  return (
    <List>
      {[1, 2].map((category, index) => (
        <Item key={index}>
          <Category />
        </Item>
      ))}
    </List>
  )
}
