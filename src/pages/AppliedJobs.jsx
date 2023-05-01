import BottomNavbar from "../components/BottomNavbar";
import vector1 from "../assets/Vector-1.png";
import { useState } from "react";
import FeaturedJob from "../components/cards/FeaturedJob";

export default function AppliedJobs() {
  const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

  const [filteredJobs, setFilteredJobs] = useState(appliedJobs);

  const filterJobs = (value) => {
    value !== "all"
      ? setFilteredJobs(appliedJobs.filter((job) => job.jobType === value))
      : setFilteredJobs(appliedJobs);
  };

  return (
    <div>
      <BottomNavbar text={"Applied Jobs"} />
      <img className="top-0 right-0 absolute" src={vector1} alt="vector1" />
      <div className="max-w-7xl mx-auto p-20">
        <select
          name="jobtype"
          id="jobtype"
          className="border border-indigo-200 rounded py-2 px-5 float-right outline-none"
          onChange={(e) => filterJobs(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Remote">Remote</option>
          <option value="On Site">On Site</option>
        </select>
        <br />
        <br />
        <br />
        <div className="flex flex-col gap-5">
          {filteredJobs.map((job) => (
            <FeaturedJob key={job.id} job={job} horizontal={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
