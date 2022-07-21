

type objectsProps = {
  family: {
    name: string;
    role: number;
    country: string;
    languages: string[]
}
}
const Objects = ({family}:objectsProps) => {
  return (
    <div style={{ border: "1px dotted black" }}>
      <h2>for object components</h2>
      <h6>{ family.name}</h6>
      <h6>{family.country}</h6>
      <div>languages:
        {
        family.languages.map((pd, index) => 
          <span key={index}> { pd}</span>
        )
      }</div>
    </div>
  )
}

export default Objects
