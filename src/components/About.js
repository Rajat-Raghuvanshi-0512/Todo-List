import React, { useContext } from 'react'
import NotesContext from '../context/Notes/NoteContext'


export default function About() {
    const context = useContext(NotesContext)
    return (
        <div className="my-3">
            My name is {context.name} and I am in {context.college}
        </div>
    )
}
