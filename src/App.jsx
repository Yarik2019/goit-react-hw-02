import { useEffect, useState } from 'react'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification'

function App() {
  // Feedback

  const reaction = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  const getFeedback = () => {
    const savedFeedback = window.localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : reaction;
  }

  const [feedback, setFeedback] = useState(getFeedback);

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback))
  }, [feedback])

  const updateFeedback = feedbackType => {
    console.log(feedbackType)
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  }

  const resetFeedback = () => {
    setFeedback(reaction)
  }

  // Feedback
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentange = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;


  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positivePercentange={positivePercentange}
        />
      ) : (
        <Notification />
      )}

    </>
  )
}

export default App;
