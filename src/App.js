import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import StarWrapper from './components/starWrapper';

function App() {

  return (
    <div className="StarApp">
      <ol>
        <li>Show the number of empty stars equal to the number provided in the input.</li>
        <li>On hover, all stars up until the point of the cursor should be lit.</li>
        <li>On click, the stars lit should be persisted.</li>
      </ol>

      <TextField
        id="star-count"
        label="Number of Stars"
        margin="normal"
      />
      <StarWrapper
        starCount={3}
      />
    </div>
  );
}

export default App;
