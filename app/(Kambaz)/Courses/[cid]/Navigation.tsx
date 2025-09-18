"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
export default function CourseNavigation() {
  const { cid } = useParams();
  return (
    <div id="wd-courses-navigation">
      <Link href={`/Courses/${cid}/Home`} id="wd-course-home-link">Home</Link><br/>
      <Link href={`/Courses/${cid}/Modules`} id="wd-course-modules-link">Modules
        </Link><br/>
      <Link href="https://piazza.com" id="wd-course-piazza-link" target="_blank">Piazza</Link><br/>
      <Link href="https://www.zoom.com/" id="wd-course-zoom-link" target="_blank">Zoom</Link><br/>
      <Link href={`/Courses/${cid}/Assignments`} id="wd-course-assignments-link">
          Assignments</Link><br/>
      <Link href={`/Courses/${cid}/Quizzes`} id="wd-course-quizzes-link">Quizzes
        </Link><br/>
      <Link href={`/Courses/${cid}/Grades`} id="wd-course-grades-link">Grades</Link><br/>
      <Link href="#" id="wd-course-people-link">People</Link><br/>
    </div>
  );}
