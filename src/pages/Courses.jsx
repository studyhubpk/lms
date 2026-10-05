import CourseCard from '../components/CourseCard'

export default function Courses({ courses }) {
  return (
    <>
      <section className="page-heading">
        <div>
          <span className="eyebrow">LEARNING LIBRARY</span>
          <h1>Courses</h1>
          <p>Explore your available courses.</p>
        </div>
        <input className="search-box" placeholder="Search courses..." />
      </section>
      <section className="course-grid">
        {courses.map(course => <CourseCard key={course.id} course={course} />)}
      </section>
    </>
  )
}
