import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="React JS Course"/>
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1235" className="wd-dashboard-course-link">
            <Image src="/images/webdev.jpg" width={200} height={150} alt="Web Development Course"/>
            <div>
              <h5> CS5610 Web Development </h5>
              <p className="wd-dashboard-course-title">
                Full stack web developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/1236" className="wd-dashboard-course-link">
            <Image src="/images/dsa.jpg" width={200} height={150} alt="Data Structures and Algorithms Course"/>
            <div>
              <h5> CS3843 Data Structures and Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Learn about data structures and algorithms
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1237" className="wd-dashboard-course-link">
            <Image src="/images/machinelearning.jpg" width={200} height={150} alt="Machine Learning Course"/>
            <div>
              <h5>CS4700 Machine Learning</h5>
              <p className="wd-dashboard-course-title">
                Introduction to ML and AI fundamentals
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1238" className="wd-dashboard-course-link">
            <Image src="/images/databases.jpg" width={200} height={150} alt="Databases Course" />
            <div>
              <h5>CS3200 Database Systems</h5>
              <p className="wd-dashboard-course-title">
                Learn relational and NoSQL database systems
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1239" className="wd-dashboard-course-link">
            <Image src="/images/cybersecurity.jpg" width={200} height={150} alt="Cybersecurity Course" />
            <div>
              <h5>CS3500 Cybersecurity</h5>
              <p className="wd-dashboard-course-title">
                Security principles and ethical hacking
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1240" className="wd-dashboard-course-link">
            <Image src="/images/cloudcomputing.jpg" width={200} height={150} alt="Cloud Computing Course" />
            <div>
              <h5>CS4200 Cloud Computing</h5>
              <p className="wd-dashboard-course-title">
                Explore cloud infrastructure and services
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1241" className="wd-dashboard-course-link">
            <Image src="/images/ai.jpg" width={200} height={150} alt="Artificial Intelligence Course" />
            <div>
              <h5>CS4100 Artificial Intelligence</h5>
              <p className="wd-dashboard-course-title">
                Explore neural networks, search, and reasoning
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
