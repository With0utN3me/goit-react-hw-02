import './App.css'
import { useState, useEffect } from 'react';
import Description from './DescriptionTitle';
import Options from './Options';
import Feedback from './Feedback';
const App = () => {
  const [feedbacks, setFeedbacks] = useState (() => {
    const savedFeedbacks = window.localStorage.getItem("saved-feedbacks");
    if(savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
      return {
        good: 0,
        neutral: 0,
        bad: 0
      }
  })
  const [totalFeedback, setTotalFeedback] = useState (() => {
    const savedTotalFeedback = window.localStorage.getItem("saved-total-feedbacks");
    if(savedTotalFeedback !== null) {
      return +savedTotalFeedback;
    }
    return 0;
  })
  const updateFeedback = feedbackType => {
    setFeedbacks(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
    setTotalFeedback(total => total + 1);
  }
  const resetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0
    });
    setTotalFeedback(0);
  }
  useEffect(() => {
    window.localStorage.setItem("saved-feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);
  useEffect(() => {
    window.localStorage.setItem("saved-total-feedbacks", totalFeedback);
  }, [totalFeedback]);
  return (
    <>
    <Description/>
    <Options 
    updateF={updateFeedback}
    totalF={totalFeedback}
    resetF={resetFeedbacks}/>
    { totalFeedback > 0 ?
      <Feedback 
        valueG = {feedbacks.good}
        valueN = {feedbacks.neutral}
        valueB = {feedbacks.bad}
        valueTF = {totalFeedback}
    /> : <p className='feedback-p'>No feedbacks yet</p>}
    </>
  )
}
export default App;

