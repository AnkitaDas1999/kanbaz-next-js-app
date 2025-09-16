// app/(Kambaz)/Courses/[cid]/Assignments/[aid]/page.tsx
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <label htmlFor="wd-description">Description</label>
      <br />
      <textarea id="wd-description" rows={5}>
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should
        include: - Your full name and section - Links to each of the lab
        assignments - Link to the Kanbas application - Links to relevant source
        code repositories
      </textarea>
      <br />
      <br />

      <table>
        <tbody>
          {/* Points */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>

          {/* Assignment Group */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECTS</option>
              </select>
            </td>
          </tr>

          {/* Display Grade As */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
                <option>Points</option>
                <option>Letter Grade</option>
                <option>Complete/Incomplete</option>
              </select>
            </td>
          </tr>

          {/* Submission Type */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>On Paper</option>
                <option>External Tool</option>
              </select>
              <br />
              <br />

              {/* Online Entry Options */}
              <label>
                <input type="checkbox" id="wd-text-entry" /> Text Entry
              </label>
              <br />
              <label>
                <input type="checkbox" id="wd-website-url" /> Website URL
              </label>
              <br />
              <label>
                <input type="checkbox" id="wd-media-recordings" /> Media
                Recordings
              </label>
              <br />
              <label>
                <input type="checkbox" id="wd-student-annotation" /> Student
                Annotation
              </label>
              <br />
              <label>
                <input type="checkbox" id="wd-file-upload" /> File Uploads
              </label>
            </td>
          </tr>

          {/* Assign To */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>

          {/* Due Date */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" value="2024-05-13" />
            </td>
          </tr>

          {/* Available From */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input type="date" id="wd-available-from" value="2024-05-06" />
            </td>
          </tr>

          {/* Until */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input type="date" id="wd-available-until" value="2024-05-20" />
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}
