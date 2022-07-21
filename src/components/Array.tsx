

type arrayProps = {
    lang:string[]
}
const Array = ({lang}:arrayProps) => {
  return (
      <div style={{ border: "1px dotted green" }}>
          <h2>array components</h2>
          {
              lang.map((item,index) => <p key={index}>
                  {item}
              </p>)
          }
      </div>
  )
}
export default Array