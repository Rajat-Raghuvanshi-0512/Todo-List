import NotesContext from "./NoteContext";
import { useState } from "react";
import Alert from "../../components/Alert";

const NoteState = (props) => {


    const Port = 8000;
    const host = `http://localhost:${Port}`
    let NotesApi = [];
    const [notes, setNotes] = useState(NotesApi);

    const FetchNotes = async () => {
        const res = await fetch(`${host}/notes/fetchnote`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        })
        const data = await res.json()
        setNotes(data)
    }

    const addNotes = async (title, desc, tag) => {

        try {
            const res = await fetch(`${host}/notes/addnote`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "auth-token": localStorage.getItem('token')
                },
                body: JSON.stringify({ title, desc, tag })
            })
            const data = await res.json()
            console.log(data);
            setNotes(notes.concat(data));
            if (res.status === 200) {
                Alert("Success", "Your Note was added")
            } else {
                Alert("Error", "Title & description must be 5 characters atleast.")
            }
        } catch (err) {
            console.log("Error Occured");
        }
    }

    const deleteNote = async (id) => {
        const res = await fetch(`${host}/notes/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        })
        await res.json()
        FetchNotes()
        if (res.status === 200) {
            Alert("Success", "Your Note was deleted")
        } else {
            Alert("Error", "Your Note was not deleted")
        }
    }

    const editNote = async (title, desc, tag, id) => {

        try {
            const res = await fetch(`${host}/notes/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "auth-token": localStorage.getItem('token')
                },
                body: JSON.stringify({ title, desc, tag })
            })
            const data = await res.json()
            console.log(data);
            if (res.status === 200) {
                await FetchNotes();
                Alert("Success", "Your note was updated successfully")
            } else {
                Alert("Error", "Title & description must be 5 characters atleast.")
            }
        } catch (err) {
            Alert("Error", "Your note was not updated")
        }
    }


    return (
        <NotesContext.Provider value={{ notes, FetchNotes, setNotes, addNotes, deleteNote, editNote }}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NoteState;