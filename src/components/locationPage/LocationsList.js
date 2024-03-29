import React from 'react'
import SingleLocation from './SingleLocation'

const LocationsList = ({ locations }) => (
    <div className="row mb-4 mx-auto mt-4">
        {locations.map((item) => (
            <div className="col-12 col-md-6" key={item.id}>
                <SingleLocation location={item} />
            </div>
        ))}
    </div>
)

export default LocationsList
