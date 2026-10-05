export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-cover">
        <span>{course.category}</span>
      </div>
      <div className="course-body">
        <h3>{course.title}</h3>
        <p>Instructor: {course.teacher}</p>
        <div className="progress-row">
          <span>{course.progress}% complete</span>
          <span>{course.lessons} lessons</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${course.progress}%` }} />
        </div>
        <button className="outline-btn">Open Course</button>
      </div>
    </article>
  )
}
