import React, { useContext, useEffect, useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import NotesContext from '../context/Notes/NoteContext';

export default function MyNotes() {
    const location = useLocation();
    const history = useHistory();
    const context = useContext(NotesContext)
    const { notes, FetchNotes, deleteNote, editNote } = context;

    const [note, setNote] = useState({
        _id: "",
        title: "",
        desc: "",
        tag: ""
    })
    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setNote({ ...note, [name]: value })
    }
    useEffect(() => {
        FetchNotes();
        if (!localStorage.getItem("token")) {
            history.push("/login")
        }
        // eslint-disable-next-line
    }, [location])
    const ref = useRef(null)
    const showModal = (title, desc, tag, _id) => {
        setNote({ _id, title, desc, tag })
        ref.current.click();
    }
    return (
        <>
            <h1 className='my-3'>Your notes</h1>
            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal" >
                Launch modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form method="post" >
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" minLength={5} required name="title" onChange={handleInput} value={note.title} id="title" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label">Description<span className="text-danger">*</span></label>
                                    <textarea name="desc" minLength={5} required onChange={handleInput} value={note.desc} id="desc" rows="5" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" name="tag" onChange={handleInput} value={note.tag} id="tag" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => editNote(note.title, note.desc, note.tag, note._id)} data-bs-dismiss="modal"  >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {FetchNotes() && notes.map((element) => {
                    const { _id, title, desc, tag } = element;
                    return (
                        <div className="col-sm-4 my-2" key={_id}>
                            <div className="card" >
                                <div className="card-body">
                                    <h3 className="card-title">{title} <span className="badge bg-primary">{tag}</span></h3>
                                    <p className="card-text"><span className="text-danger">Description:</span>  {desc}</p>
                                    <i className="fas fa-edit mx-2" onClick={() => showModal(title, desc, tag, _id)}></i>
                                    <i className="fas fa-trash-alt mx-2" onClick={() => deleteNote(_id)}></i>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}