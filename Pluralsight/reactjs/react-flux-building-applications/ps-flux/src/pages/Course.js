import React from 'react'

const Course = ({ match }) => (
    <>
        <h1>Manage Course </h1>
        <h2>{match.params.slug}</h2>
    </>
)

export default Course
