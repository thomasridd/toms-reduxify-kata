import React from 'react'
import './styles.scss'

export default function TextEntry(props) {
    return (
        <div><input placeholder="type anything here" type="text" onChange={props.onChange} /></div>
    )
}