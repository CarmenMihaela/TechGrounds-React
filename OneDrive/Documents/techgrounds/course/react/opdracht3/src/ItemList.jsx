import React from 'react'
import Item from './Item'

export default function ItemList( {items} ) {
    return (
    items.map(item => {
        return <Item  item={item} />
    })
    )
}
