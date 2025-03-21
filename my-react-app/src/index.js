import React from 'react';
import ReactDOM from 'react-dom/client';
// import Car from './Car.js'


// 1a) Creates a root for the first element
// const myFirstElement = <h1> Hello React! </h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);

// 1b) Creates a paragraph & displays it in an element with the id of "root"
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<p> Hello! </p>);

// 1c) This uses JSX to write HTML tags inside the js code.
// const myElement = (
//   <table> 
//     <tr> 
//       <th>Name</th>
//     </tr>
//     <tr>  
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

// const container = document.getElementById('sandy');
// const root = ReactDOM.createRoot(container);
// root.render(myElement);



//2a - Creating the first component. This is a class component
  // class Car extends React.Component {
  //   render() {
  //     return <h2>Hi, I am a Car!</h2>
  //   }
  // }

//2b Creates the same example using a function component instead
// function Car() {
//   return <h2>Hi, I am a Car!</h2>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);

//2c Props. you can pass in properties as parameters
// function Car(props) {
//   return <h2> I am a {props.color} Car!</h2>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car color="red"/>)


//2d Components in components - Garage component contains Car
function Car(props) {
  return <h2>I am a {props.brand}!</h2>
}

function Garage() {
  return (
    <>
    <h1>Who lives in my Garage?</h1>
    <Car brand="Ford"/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

//3a Importing components from other files
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);