const student={
    firstName: "Rahul",
  lastName: "Singh",
  id: 101,
  fullName: function()
  {
  return this.firstName + "" + this.id;
  }
}
console.log(student.fullName());