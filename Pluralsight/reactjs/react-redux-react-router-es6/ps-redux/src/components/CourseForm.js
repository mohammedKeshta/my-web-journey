import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './common/TextInput'

const CourseForm = ({ onSubmit, onChange, course, errors, hasSlug }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <TextInput
          id="title"
          label="Title"
          onChange={onChange}
          name="title"
          value={course.title}
          error={errors.title}
        />

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <div className="field">
            <select
              id="author"
              name="authorId"
              onChange={onChange}
              value={course.authorId || ''}
              className="form-control"
            >
              <option value="" />
              <option value="1">Cory House</option>
              <option value="2">Scott Allen</option>
              <option value="4">Mohammed Elzanaty</option>
            </select>
          </div>
          {errors.authorId && <div className="alert alert-danger">{errors.authorId}</div>}
        </div>

        <TextInput
          id="category"
          label="Category"
          name="category"
          onChange={onChange}
          value={course.category}
          error={errors.category}
        />

        <input
          type="submit"
          value={hasSlug ? 'Update' : 'Save'}
          className="btn btn-primary float-right"
        />
      </form>
    </>
  )
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  hasSlug: PropTypes.bool.isRequired,
}

export default CourseForm
