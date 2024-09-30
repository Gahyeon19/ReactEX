function ComponentObj() {
  const name = "홍길동";
  const student = {
    id : 0,
    name,
    score : 90
  }
  
  return (
    <>
      <h2>학생 id : {student.id}</h2>
      <h2>학생 name : {student.name}</h2>
      <h2>학생 score : {student.score}</h2>
    </>
  )
}

export default ComponentObj