import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
                {courses.map(({ slug, title, authorId, category, id }, index) => (
                    <tr key={`${title}-${id}`}>
                        <th scope="row">{index}</th>
                        <td>
                            <Link to={`course/${slug}`}>{title}</Link>
                        </td>
                        <td>{authorId}</td>
                        <td>{category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

CourseList.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            authorId: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default CourseList
