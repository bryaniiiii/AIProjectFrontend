import { useState } from 'react'


const AskQuestion = ({onAsk}) => {

    const [question, setQuestion] = useState('')
    const [context, setContext] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        
        if(!question) {
            alert('Please specify question')
            return
        }

        onAsk({question, context})

        setQuestion('')
        setContext('')
        }



  return (
    <form className='add-form' onSubmit = {onSubmit}>
        <div className='form-control'>
        <label>Question</label>
<input type="text" placeholder='Ask Question' value = {question} onChange={(e) => setQuestion(e.target.value)}/>
        </div>
        <div className='form-control'>
        <label>Answer Context</label>
<input type="text" placeholder='Answer Context' value = {context} onChange={(e) => setContext(e.target.value)}/>
        </div>
<input type="submit" value='Ask!' className='btn btn-block'/>
    </form>
  )
}

export default AskQuestion
