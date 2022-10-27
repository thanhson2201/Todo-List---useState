function App() {

  //! Two-way binding

  //! Todo List
  const [job, setJob] = useState();
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('JOBS'));
    return storageJobs ?? [];
  });

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job];

      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('JOBS',jsonJobs)

      return newJobs;
    })
    setJob('')
  }

  console.log(job);
  return (
    <div className="App" style={{padding: 32}}>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
       <ul>
          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
       </ul>
    </div>
  )
}
