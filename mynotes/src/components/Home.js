import React from 'react'

export default function Home() {
    const login = false;
    if (login === true) {
        return (
            <>
                <div className="container">
                    <h1 className='my-3'>Add a note</h1>
                    <form style={{ padding: '50' }}>
                        <div className="mb-3">
                            <label for="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="desc" className="form-label">Description</label>
                            <input type="text" className="form-control" id="desc" />
                        </div>
                        <div className="mb-3">
                            <label for="desc" className="form-label">Tag(Optional)</label>
                            <input type="text" className="form-control" id="desc" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <h1 className='my-3'>Your notes</h1>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="d-flex flex-column align-items-center justify-content-center " style={{ height: '88vh' }}>
                    <h1 style={{ fontSize: '5rem', color: 'royalblue' }}>WELCOME TO NOTES COLLECTOR</h1>
                    <h3 style={{ fontSize: '3rem', color: 'red' }}>Your Notes on the cloud</h3>
                </div>
            </>
        )
    }
}
