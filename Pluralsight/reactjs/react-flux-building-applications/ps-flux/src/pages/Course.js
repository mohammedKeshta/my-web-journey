import React, { useState, useEffect } from 'react'
import CourseForm from '../components/CourseForm'
import { getCourseBySlug, saveCourse } from '../api/courseApi'
import { toast } from "react-toastify";

const Course = ({ match, history }) => {
    const [errors, setErrors] = useState({});
    const [course, setCourse] = useState({
        id: null,
        slug: '',
        title: '',
        authorId: null,
        category: '',
    })

    const hasSlug = !!match.params.slug
    const slug = match.params.slug // from the path `/courses/:slug`

    useEffect(() => {
        const fetchCourse = async () => {
            const _course = await getCourseBySlug(slug)
            setCourse(_course)
        }

        if (slug) {
            fetchCourse()
        }
    }, [slug])

    function handleChange({ target: { name, value } }) {
        setCourse({
            ...course,
            [name]: value,
        })
    }

    function formIsValid() {
        const _errors = {}

        if (!course.title) _errors.title = 'Title is required'
        if (!course.authorId) _errors.authorId = 'Author ID is required'
        if (!course.category) _errors.category = 'Category is required'

        setErrors(_errors)
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (!formIsValid()) return
        saveCourse(course).then(() => {
            history.push('/courses')
            toast.success('Course saved.')
        })
    }

    return (
        <>
            <h2 className="text-primary text-center mt-3 mb-3">
                {hasSlug ? 'Edit' : 'Add'} Course
            </h2>
            <CourseForm
                errors={errors}
                course={course}
                hasSlug={hasSlug}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    )
}

export default Course
