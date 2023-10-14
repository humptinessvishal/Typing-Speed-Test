// import React, { useState } from 'react';

// const TypingInputComponent = () => {
//     const [words] = useState(['apple', 'banana', 'cherry']);
//     const [userInput, setUserInput] = useState('');

//     const handleInputChange = (e) => {
//         setUserInput(e.target.value);
//     };

//     return (
//         <div>
//             <h2>Typing Input Component</h2>
//             <div>
//                 <p>Words: {words.join(' , ')}</p>
//                 <input type="text" value={userInput} onChange={handleInputChange} placeholder="Start typing..."/>
//             </div>
//         </div>
//     );
// };

// export default TypingInputComponent;



// import React, { useState } from 'react';

// function TypingComponent() {
//   // Define a state variable to hold the input value
//   const [inputValue, setInputValue] = useState('');

//   // Define a function to handle changes in the input field
//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleChange} placeholder="Type something..."/>
//       <p>You typed: {inputValue}</p>
//     </div>
//   );
// }

// export default TypingComponent;


import React, { useState } from 'react';

function TypingSpeedApp() {
    const [inputValue, setInputValue] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [typingSpeed, setTypingSpeed] = useState(null);

    const textToType = "The quick brown fox jumps over the lazy dog";

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);

        if (!startTime) {
            setStartTime(new Date());
        }

        if (inputValue === textToType) {
            setEndTime(new Date());
            calculateTypingSpeed();
        }
    };

    const calculateTypingSpeed = () => {
        const timeDiff = endTime - startTime;
        const seconds = timeDiff / 1000;
        const words = inputValue.split(' ').length;
        const typingSpeed = Math.round((words / seconds) * 60);
        setTypingSpeed(typingSpeed);
    };

    return (
        <div>
            <h1>Typing Speed Test</h1>
            <p>{textToType}</p>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Start typing..."/>
            {typingSpeed && <p>Typing Speed: {typingSpeed} WPM</p>}
        </div>
    );
};

export default TypingSpeedApp;