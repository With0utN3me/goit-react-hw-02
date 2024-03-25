import './App.css'
import { useState } from 'react';
import Description from './DescriptionTitle';
import Options from './Options';
import Feedback from './Feedback';
const App = () => {
  const [feedbacks, setFeedbacks] = useState ({
    good: 0,
    neutral: 0,
    bad: 0
  })
  const updateFeedback = feedbackType => {
    setFeedbacks(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  }
  const resetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }
  let [totalFeedback, setTotalFeedback] = useState(0)
  const updateTotalFeedback = () => {
    setTotalFeedback(
      totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad
    )
  }
  return (
    <>
    <Description/>
    <Options updateF={updateFeedback} totalF={totalFeedback} updateTotalF={updateTotalFeedback} resetF={resetFeedbacks}/>
    { totalFeedback > 0 &&
      <Feedback 
        valueG = {feedbacks.good}
        valueN = {feedbacks.neutral}
        valueB = {feedbacks.bad}
    />}
    </>
  )
}
export default App;

