import React from 'react'
import { PropsTypes } from 'prop-types'

const CourseList = ({ courses }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author Id</th>
                    <th scope="col">Category</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(({ title, authorId, category, id }, index) => (
                    <tr key={`${title}-${id}`}>
                        <th scope="row">{index}</th>
                        <td>{title}</td>
                        <td>{authorId}</td>
                        <td>{category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

CourseList.propTypes = {
    courses: PropsTypes.arrayOf(
        PropsTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            authorId: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired,
        })
    ).isRequired,
}

CourseList.defaultProps = {
    courses: [],
}

export default CourseList
