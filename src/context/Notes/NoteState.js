import NotesContext from "./NoteContext";

const NoteState = (props) => {
    const state = {
        "name": "Rajat",
        "college": "Chandigarh University"
    }
    return (
        <NotesContext.Provider value={state}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NoteState;