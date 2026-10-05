import CourseCard from '../components/CourseCard'

export default function Dashboard({ role, courses, onCourses }) {
  const name = role === 'admin' ? 'Administrator' : role === 'teacher' ? 'Teacher' : 'Student'

  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">MY LMS</span>
          <h1>Welcome, {name}!</h1>
          <p>Manage your learning journey from one place.</p>
        </div>
        <button className="primary-btn" onClick={onCourses}>Browse Courses</button>
      </section>

      <section className="stats-grid">
        <div className="stat-card"><span>Active Courses</span><strong>3</strong><small>+1 this month</small></div>
        <div className="stat-card"><span>Completed Lessons</span><strong>27</strong><small>Keep learning</small></div>
        <div className="stat-card"><span>Assignments</span><strong>8</strong><small>2 pending</small></div>
        <div className="stat-card"><span>Average Score</span><strong>86%</strong><small>Good progress</small></div>
      </section>

      <section className="section-heading">
        <div><span className="eyebrow">LEARNING</span><h2>Continue Learning</h2></div>
        <button className="text-btn" onClick={onCourses}>View all →</button>
      </section>

      <section className="course-grid">
        {courses.map(course => <CourseCard key={course.id} course={course} />)}
      </section>
    </>
  )
}
