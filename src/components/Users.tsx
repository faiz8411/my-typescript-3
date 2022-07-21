

type userProps = {
  name:string,age:number,isStudent:boolean,role:number
}
const Users = ( {name,age,isStudent ,role}:userProps) => {
  return (
    <div style={{ border: "1px dotted red" }}>
      <h1>user components</h1>
          <h2> Users :{name} </h2>
          
          <p>age {age }</p>
      {
        isStudent?<p>yes</p>:<p>no</p>
          }
          <p>role {role }</p>
      </div>
  )
}

export default Users