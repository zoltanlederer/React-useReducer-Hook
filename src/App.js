import React, {useReducer} from 'react';

/***** SHOPPING LIST *****/
/*
const reducer = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: state.length,
          name: action.name
        }
      ];
      case 'remove':
        // kepp every item except theone we want to remove
        return state.filter((el, index) => index !== action.index);
      case 'clear':
        return [];
    default: return state;
  }
};

function ShoppingList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer(reducer, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: 'add',
      name: inputRef.current.value
    });
    inputRef.current.value = '';
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch({ type: 'remove', index })}>
              X
            </button>
          </li>
        ))}      
      </ul>
      <button onClick={() => dispatch({ type: 'clear' })}>Clear</button>
    </>
  );
}
*/

/*
Make a “room” with a light that has 4 levels – off, low, medium, high – and change the level
each time you press a button. Create a second button to turn the lights off.
*/
/*
const initialState = [
  {
    bg: "#000000",
    name: "off"
  }
];

const reducer = (state, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case "off":
      return [
        {
          bg: "#000000",
          name: "off"
        }
      ];
    case "low":
      return [
        {
          bg: "#999999",
          name: "low"
        }
      ];
    case "medium":
      return [
        {
          bg: "#666666",
          name: "medium"
        }
      ];
    case "high":
      return [
        {
          bg: "#cccccc",
          name: "high"
        }
      ];
    default:
      throw new Error();
  }
};
let index = 1;
const RoomLight = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const switchLight = (e) => {
    e.preventDefault();

    console.log("state-1", state[0]);
    console.log("index-1", index);
    console.log(state[0].name);

    if (index === 0) {
      dispatch({
        type: "off"
      });
      index++;
    } else if (index === 1) {
      dispatch({
        type: "low"
      });
      index++;
    } else if (index === 2) {
      dispatch({
        type: "medium"
      });
      index++;
    } else if (index === 3) {
      dispatch({
        type: "high"  
      });
      index = 0;
    } 

    console.log("state-2", state[0]);
    console.log("index-2", index);
    
  };

  const switchOff = (e) => {
    e.preventDefault();
    dispatch({
      type: 'off'
    });
    index = 1;
  }

  return (
    <div style={{ backgroundColor: state[0].bg }}>
      <h1>{state[0].name}</h1>
      <button onClick={switchLight}>Switch</button>
      <button onClick={switchOff}>OFF</button>
    </div>
  );
};
*/

/*
Make a “keypad” with 6 buttons that must be pressed in the correct order to unlock it. Each
correct button press advances the state. An incorrect button should reset it.
*/

const initialState = [
  {
    message: 'Please press the correct code'
  }
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'correct': 
      return (
        {
          message: 'Correct, keep going'
        }
      );
    case 'incorrect': 
      return (
        {
          message: 'Opps, Please try again'
        }
      );
    case 'done': 
      return (
        {
          message: 'YOU CRACKED THE CODE'
        }
      );
    default: throw new Error();
  }
};

// const code = '21436';
const codeArr = [2,1,4,3,6];
const pressedKey = [];
let counter = 0;

const Keypad = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const pressKeyPad = (e) => {
    e.preventDefault();
    
    pressedKey.push(Number(e.target.textContent));

    if(Number(e.target.textContent) === codeArr[counter]){
      dispatch({type: 'correct'});
      counter++;
      
      if (JSON.stringify(pressedKey) === JSON.stringify(codeArr)) {
        dispatch({type: 'done'});
        pressedKey.splice(0, pressedKey.length);
        counter = 0;
        alert('YOU CRACKED THE CODE');
      }
    } else if(e.target.textContent !== codeArr[counter]) {
      dispatch({type: 'incorrect'});
      pressedKey.splice(0, pressedKey.length);
      counter = 0;
    }

  }
  
  return (
    <div className='keypad-container'>
      <div>
        <button onClick={pressKeyPad}>1</button>
        <button onClick={pressKeyPad}>2</button>
      </div>
      <div>
        <button onClick={pressKeyPad}>3</button>
        <button onClick={pressKeyPad}>4</button>
      </div>
      <div>
        <button onClick={pressKeyPad}>5</button>
        <button onClick={pressKeyPad}>6</button>
      </div>
      <div>Output: <strong>{state.message}</strong></div>
    </div>
  );

};

export default Keypad;
