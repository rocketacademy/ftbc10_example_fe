import axios from "axios";
import { useState } from "react";

function StudentForm(props) {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [gender, setGender] = useState(true);
  const [course, setCourse] = useState("Full Time Bootcamp");
  const [edit, setEdit] = useState(false);
  const [student_id, setStudent_id] = useState(1);

  const sendData = async () => {
    const student = {
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      course: course,
      id: student_id,
    };

    let data = edit
      ? await axios.put("http://localhost:8000/students", student)
      : await axios.post("http://localhost:8000/students", student);
    console.log(data.data);
    props.setStudents(data.data);

    setFirst_name("");
    setLast_name("");
    setGender(true);
    setCourse("Full Time Bootcamp");
    setEdit(false);
  };

  return (
    <div>
      <h1>Student Form</h1>

      <label>Edit?</label>
      <br />
      <select value={edit} onChange={(e) => setEdit(e.target.value)}>
        <option value={true}>Edit</option>
        <option value={false}>New User</option>
      </select>

      <br />
      <br />
      {edit ? (
        <div>
          <label>User ID</label>
          <br />
          <input
            type="number"
            max={props.count}
            value={student_id}
            onChange={(e) => setStudent_id(e.target.value)}
          />
          <br />
          <br />
        </div>
      ) : null}

      <label>First Name</label>
      <br />
      <input
        type="text"
        value={first_name}
        placeholder="Set First Name"
        onChange={(e) => setFirst_name(e.target.value)}
      />
      <br />
      <label>Last Name</label>
      <br />
      <input
        type="text"
        placeholder="Set Last Name"
        value={last_name}
        onChange={(e) => setLast_name(e.target.value)}
      />
      <br />
      <label>Course</label>
      <br />
      <select value={course} onChange={(e) => setCourse(e.target.value)}>
        <option value="Part Time Bootcamp">Part Time Bootcamp</option>
        <option value="Full Time Bootcamp">Full Time Bootcamp</option>
        <option value="Fundamentals">Fundamentals</option>
      </select>
      <br />

      <label>Gender</label>
      <br />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value={true}>Male</option>
        <option value={false}>Female</option>
      </select>

      <br />
      <br />
      <button onClick={sendData}>Submit</button>
    </div>
  );
}

export default StudentForm;
