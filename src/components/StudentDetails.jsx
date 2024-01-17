const StudentDetails = () => {
    const handleSubmit = () => {};
    const handleTextChange = () => {};
  return (
    <section>
        <ul>
            <li></li>
        </ul>
        <ul>
            <li>

            </li>
        </ul>
        <ul>
            <li>

            </li>
        </ul>
        <form onSubmit={handleSubmit}>
            <label>
                <input onChange={handleTextChange}/>
                <input onChange={handleTextChange}/>
                <button>Submit</button>
            </label>
        </form>
    </section>
  )
}

export default StudentDetails