

type arrayObjectsProps = {
    users: {
    name: string;
    role: number;
    country: string;
    languages: string[];
}[]
}
const ArrayOfObject = ({users}:arrayObjectsProps) => {
  return (
      <div>
          {
              users.map((pd, index) => {
                  return <div key={pd.role}>
                      <h2>{pd.name}</h2>
                      <p>{ pd.country}</p>
                  </div>
              }
                 
                
              )
          }
    </div>
  )
}

export default ArrayOfObject