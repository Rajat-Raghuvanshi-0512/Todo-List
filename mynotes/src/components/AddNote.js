import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import NotesContext from '../context/Notes/NoteContext'

export default function AddNote() {
    const history = useHistory()
    const context = useContext(NotesContext)
    const { addNotes } = context;

    const [note, setNote] = useState({
        title: "",
        desc: "",
        tag: ""
    })
    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setNote({ ...note, [name]: value })
    }
    const handleOnClick = (e) => {
        e.preventDefault();
        const { title, desc, tag } = note
        addNotes(title, desc, tag)
        setNote({ title: "", desc: "", tag: "" });
    }
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            history.push("/login")
        }
        // eslint-disable-next-line
    }, [])
    return (

        <div className="new-container">
            <h1 className='my-3'>Add a note</h1>
            <form method="post" >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" minLength={5} required name="title" onChange={handleInput} value={note.title} id="title" placeholder="Enter Title (Atleast 5 characters)" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description<span className="text-danger">*</span></label>
                    <textarea name="desc" minLength={5} required onChange={handleInput} value={note.desc} id="desc" rows="5" placeholder="Enter Description (Atleast 5 characters)" />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" name="tag" onChange={handleInput} value={note.tag} id="tag" placeholder="Enter Tag" />
                </div>
                <button type="submit" className="btn btn-dark" onClick={handleOnClick}>Add Note</button>
            </form>
        </div>
    )
}
