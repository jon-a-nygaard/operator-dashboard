import React from 'react';

export default function List({ list }) {
    const itemElements = list.map(({ name, value }) => {
        return <li class="list-group-item">{name}: {value}</li>
    });
    return <ul class="list-group">
        {itemElements}
    </ul>
}