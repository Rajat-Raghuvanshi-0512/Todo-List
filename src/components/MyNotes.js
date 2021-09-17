import React from 'react'

export default function MyNotes() {

    const api = [
        {
            "_id": "6140fb45af1c7d84rfab6c7c3",
            "title": "New title",
            "desc": "This Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus esse veniam quia ad itaque eaque asperiores numquam ipsam necessitatibus, dolore praesentium repellendus beatae animi iure enim, tempore quisquam ut.",
            "user": "613e6db8bece7bcad8e48c04",
            "date": "2021-09-14T19:43:01.048Z",
            "__v": 0,
            "tag": "New tag"
        },
        {
            "_id": "6140fb4f5af1c7d84fab6c7c4",
            "title": "Updated title",
            "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus esse veniam quia ad itaque eaque asperiores numquam ipsam necessitatibus, dolore praesentium repellendus beatae animi iure enim, tempore quisquam ut.",
            "user": "613e6db8bece7bcad8e48c04",
            "date": "2021-09-14T19:43:01.048Z",
            "__v": 0,
            "tag": "Now added this tag"
        },
        {
            "_id": "6140fba45af1c7d84fab6c7c5",
            "title": "Updated title",
            "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus esse veniam quia ad itaque eaque asperiores numquam ipsam necessitatibus, dolore praesentium repellendus beatae animi iure enim, tempore quisquam ut.",
            "user": "613e6db8bece7bcad8e48c04",
            "date": "2021-09-14T19:43:01.048Z",
            "__v": 0,
            "tag": "Now added this tag"
        },
        {
            "_id": "6140fdb45af1c7d84fab6c7c6",
            "title": "New title",
            "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus esse veniam quia ad itaque eaque asperiores numquam ipsam necessitatibus, dolore praesentium repellendus beatae animi iure enim, tempore quisquam ut.",
            "user": "613e6db8bece7bcad8e48c04",
            "date": "2021-09-14T19:43:01.048Z",
            "__v": 0,
            "tag": "Now added this tag"
        }

    ]
    return (
        <>
            <h1 className='my-3'>Your notes</h1>
            <div className="row">
                {api.map((element) => {
                    const { _id, title, desc, tag } = element;
                    return (
                        <div className="col-sm-4 my-2" key={_id}>
                            <div className="card" >
                                <div className="card-body">
                                    <h3 className="card-title">{title} <span className="badge bg-secondary">{tag}</span></h3>
                                    <p className="card-text">{desc}</p>
                                    <i className="fas fa-edit mx-2"></i>
                                    <i className="fas fa-trash-alt mx-2"></i>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
