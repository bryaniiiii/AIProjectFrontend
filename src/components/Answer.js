


const Answer = ({answer,confidence}) => {

  
  
    return (
    <>
    <div>
    <label>Answer:</label>
        <h4>{answer}</h4>
    </div>
    
    <div>
    <label>Confidence:</label>
        <h4>{confidence}</h4>
    
    </div>
    
    </>
  )
}

export default Answer
