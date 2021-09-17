import React from 'react'

export default function AddNote() {
    const colRed = {
        color: "red"
    }
    return (
        <>
            <h1 className='my-3'>Add a note</h1>
            <form >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title<span style={colRed}>*</span></label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description<span style={colRed}>*</span></label>
                    <textarea name="desc" id="desc" rows="5"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" />
                </div>
                <button type="submit" className="btn btn-dark">Add Note</button>
            </form>
        </>
    )
}
