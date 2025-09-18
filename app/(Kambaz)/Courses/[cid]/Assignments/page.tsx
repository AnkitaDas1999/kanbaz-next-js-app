"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Assignments() {
  const { cid, aid } = useParams();
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href={`/Courses/${cid}/Assignments/${aid}`}
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </Link>
          <div>
            Multiple Modules |
            <b> Not available until </b> May 6 at 12:00am |
            <b> Due </b> May 13 at 11:59pm | 100 pts
          </div> </li>
          <li className="wd-assignment-list-item">
          <Link
            href={`/Courses/${cid}/Assignments/${aid}`}
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
          <div>
            Multiple Modules |
            <b> Not available until </b> May 13 at 12:00am |
            <b> Due </b> May 20 at 11:59pm | 100 pts
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href={`/Courses/${cid}/Assignments/${aid}`}
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </Link>
          <div>
            Multiple Modules |
            <b> Not available until </b> May 20 at 12:00am |
            <b> Due </b> May 27 at 11:59pm | 100 pts
          </div>
        </li>
      </ul>
      <h3 id="wd-assignments-title">
        QUIZZES 10% of Total <button>+</button> </h3>
      <h3 id="wd-assignments-title">
        EXAMS 20% of Total <button>+</button> </h3>
      <h3 id="wd-assignments-title">
        PROJECT 30% of Total <button>+</button> </h3>
    </div>
);}
