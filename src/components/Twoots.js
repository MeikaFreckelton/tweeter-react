import React from 'react'
import Twoot from './Twoot'
// Display all the Twoots

const Twoots = ({twootsData}) => {

    return (
        <div>
            {
                twootsData
                .sort((a, b) => b.modified_date - a.modified_date)
                .map((twoot) => <Twoot key={twoot._id} twoot={twoot} />)


            }
        </div>
    )
}

export default Twoots