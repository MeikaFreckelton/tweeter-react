import React, {useState, useEffect} from 'react'


// Create a Twoot


const AddTwoot = ({history, nextId, addTwoot}) => {
    const divStyles = {
        display: "grid",
        width: "100vw"
    }
    const inputStyles = {
        width: "70vw",
        margin: ".5em"
    }
    const labelStyles = {
        fontSize: "1.2em"
    }
    const textAreaStyles = {
        height: "200px",
        margin: ".5em",
        width: "70vw"
    }

    const initialFormState = {
        title: "",
        category: "",
        content: ""
    }

    const [formState, setFormState] = useState(initialFormState)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTwoot = {
            _id: nextId,
            title: formState.title,
            category: formState.category || "general",
            modified_date: new Date(),
            content: formState.content
        }
        // console.log(newTwoot)
        addTwoot(newTwoot)
        history.push(`/twoot/${nextId}`)
        // console.log(newTwoot)
    }
    console.log(formState)

    
    

    return (
        <div id="newPostForm">
            <h1>add twoot</h1>
            <form onSubmit={handleSubmit}>
                <div style={divStyles} >
                    <label style={labelStyles}>Title</label>
                    <input
                    type="text"
                    style={inputStyles}
                    required
                    name="title"
                    placeholder="title..."
                    onChange={handleChange}
                    />


                </div>
                <div style={divStyles} >
                    <label style={labelStyles}>Category</label>
                    <input
                    type="text"
                    style={inputStyles}
                    required
                    name="category"
                    placeholder="category..."
                    onChange={handleChange}
                    />
                    

                </div>
                <div style={divStyles} >
                    <label style={labelStyles}>Content</label>
                    <textarea
                    form="newPostForm"
                    style={textAreaStyles}
                    required
                    name="content"
                    placeholder="content..."
                    onChange={handleChange}
                    />
                    

                </div>
                <input type="submit" value="New Twoot"></input>


            </form>
        </div>
    )
}

export default AddTwoot