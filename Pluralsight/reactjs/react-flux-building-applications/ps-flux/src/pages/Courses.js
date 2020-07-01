import React, { useEffect, useState } from 'react'
import { getCourses } from '../api/courseApi'
import CourseList from '../components/CourseList'

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
            <CourseList courses={courses} />
        </>
    )
}

export default Courses
