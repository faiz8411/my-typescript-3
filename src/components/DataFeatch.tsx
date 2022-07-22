

type dataProps = {
    status:"loading"|"error"|"success"
}
const DataFeatch = ({ status }: dataProps) => {
    if (status === "loading") {
        return <h2>data loading...</h2>
    }
     else if (status === "error"){
      return  <h2>error. data could not fetched...</h2>
    }
  return (
      <div>
          
          
          <h2>data fetched successfully...</h2>
      </div>
  )
}

export default DataFeatch