import React, { useEffect, useState } from 'react'
import { getCourses } from '../api/courseApi'
import CourseList from '../components/CourseList'
import { getAuthors } from '../api/authorApi'
import { Link } from 'react-router-dom'

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = () => {
      getCourses().then(async (courses) => {
        const _authors = await getAuthors()

        const _coursesWithAuthors = courses.map((course) => {
          let _course = null
          _authors.forEach((author) => {
            if (course.authorId === author.id) {
              _course = { ...course, author: author.name }
            }
          })
          return _course
        })
        setCourses(_coursesWithAuthors)
      })
    }

    fetchCourses()
  }, [])

  return (
    <>
      <div className="row mt-3 mb-3">
        <div className="col-6">
          <h2 className="text-primary">Courses</h2>
        </div>
        <div className="col-6 text-right">
          <Link className="btn btn-primary" to="course">
            Add Course
          </Link>
        </div>
      </div>
      <CourseList courses={courses} />
    </>
  )
}

export default Courses
