import React, { useEffect, useState } from 'react'
import { getCourses } from '../api/courseApi'

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const fetchCourses = async () => {
            const courses = await getCourses()
            setCourses(courses)
        }

        fetchCourses()
    }, [])
    return (
        <>
            <h2>Courses</h2>
            <table className="table table-dark">
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
        </>
    )
}

export default Courses
