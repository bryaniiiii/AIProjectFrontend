import Header from './components/Header'
import Answer from './components/Answer'
import AskQuestion from './components/AskQuestion'
import { useState, useEffect } from 'react'


function App() {
  const [showAskQuestion, setShowAskQuestion] = useState(false)
  const[answer, setAnswer] = useState('Ask a Question First!')
  const[confidence, setConfidence] = useState('')



  const fetchAnswer = async (question, context) => {
    const res = await fetch("http://localhost:8000/predict",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({question: question, answer_text: context})
    })
    const data = await res.json()

    return data
  
}


  const askQuestion = async (question) => {
    const newQuestion = question.question
    const newAnswerContext = question.context
    const answerFromServer= await fetchAnswer(newQuestion,newAnswerContext)
    setAnswer(answerFromServer.answer)
    setConfidence(answerFromServer.confidence)
  }

  return (
    <div className="container">
        <Header onAsk = {() => setShowAskQuestion(!showAskQuestion)} showAsk = {showAskQuestion}/>
        {showAskQuestion && <AskQuestion onAsk = {askQuestion}/>}
        <Answer answer = {answer} confidence = {confidence}/>
    </div>
  );
}



export default App;
