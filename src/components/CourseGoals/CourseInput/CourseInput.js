import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = () => {
    let submittedData = enteredValue.trim();

    if (!submittedData || submittedData === '') {
      alert('You must not submit an empty value')
    } else {
      props.onAddGoal(submittedData);
    }

    setEnteredValue('')
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" onClick={formSubmitHandler}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
