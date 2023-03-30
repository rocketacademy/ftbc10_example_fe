const Student = (props) => {
  return (
    <div className="student">
      <div onClick={() => props.getAddress(props.id)}>
        <h3>
          {props.first_name} - {props.last_name}
        </h3>
        <h4>{props.gender ? "Male" : "Female"}</h4>
        <h4>{props.course}</h4>{" "}
      </div>
      <button onClick={() => props.deleteStudent(props.id)}>
        Delete Student
      </button>
    </div>
  );
};

export default Student;
