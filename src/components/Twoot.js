import React from 'react'
import {Link} from 'react-router-dom'
// Display the one Twoot  - Remember to allow the passing of an id here


const Twoot = ({history, twoot, deleteTwoot, showControls}) => {

    

    if (!twoot){
        return null
    } else {
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
        const {title, category, content, modified_date} = twoot

        const linkStyles ={
            color: "#1e2182"
        }

        const divStyles={
            padding: '3%',
            backgroundColor: "#f5f5f5",
            margin: '3%',
            fontFamily: 'PT Sans',
            width: "50vw"


        }
        const categoryStyles = {
            color: "#6e6e6e"
        }

        const divCentered = {
            display: 'flex',
            justifyContent: 'center'
        }

        const handleDelete = (e) => {
            e.preventDefault()
            deleteTwoot(twoot._id)
            history.push("/")
        }

        const handleEdit = (e) => {
            e.preventDefault()
            history.push(`/twoot/edit/${twoot._id}`)
        }

        


        return (
            <div style={divCentered}>
                <div style={divStyles}>
                    <Link style={linkStyles} to={`/twoot/${twoot._id}`} >
                        <h1>{title}</h1>
                    </Link>
                    <h3 style={categoryStyles}>{category}</h3>
                    <h5>{modified_date.toLocaleString()}</h5>
                    <p>{content}</p>
                    {showControls && <button onClick={handleDelete}>delete</button>}
                    {showControls && <button onClick={handleEdit}>edit</button>}
                </div>
            </div>
        )
    }

    
}

export default Twoot