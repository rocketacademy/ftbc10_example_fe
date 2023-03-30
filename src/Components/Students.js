import axios from "axios";
import { useState, useEffect } from "react";
import Student from "./Student";
import StudentForm from "./StudentForm";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [address, setAddress] = useState([]);

  const getAddress = async (id) => {
    console.log("getting data");
    let data = await axios.get(
      `http://localhost:8000/students/addresses/${id}`
    );
    console.log("got data", data.data);
    setAddress(data.data);
  };

  const getStudents = async () => {
    let data = await axios.get("http://localhost:8000/students");
    console.log(data);
    setStudents(data.data);
  };

  const deleteStudent = async (id) => {
    let data = await axios.delete(`http://localhost:8000/students/${id}`);
    console.log(data);
    setStudents(data.data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      <h1>Students</h1>
      <div className="centered">
        {students && students.length > 0 ? (
          students.map((student) => (
            <Student
              key={student.id}
              {...student}
              deleteStudent={deleteStudent}
              getAddress={getAddress}
            />
          ))
        ) : (
          <p>Sam Failed</p>
        )}
      </div>

      {address && address.length > 0
        ? address.map((address) => (
            <h1>
              {address.first_name} {address.last_name} lives: {address.address}
            </h1>
          ))
        : null}

      <StudentForm count={students.length} setStudents={setStudents} />
    </div>
  );
}
