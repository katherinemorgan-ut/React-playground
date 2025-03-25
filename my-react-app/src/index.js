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

//3a Components in components 
// function Car() {
//   return <h2>I am a Car!</h2>
// }

// function Garage() {
//   return (
//     <>
//     <h1>Who lives in my Garage?</h1>
//     <Car />
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);


//4a React Events
// function Football() {
//   const shoot = () => {
//     alert("Great shot~");
//   }

// return (
//   <button onClick={shoot}>Take the shot!</button>
// );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);


//4b Passing Arguments into an Event
// function Football() {
//   const shoot = (a) => {
//     alert(a);
//   }

//   // "Goal!" is passed in as a parameter to the shoot event handler
//   return (
//     <button onClick={() => shoot("Goal!")}>Take the shot!</button>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);

//4c the React Event Object 
// function Football() {
//   const shoot = (a, b) => {
//     alert(b.type);
//     // 'b' represents the React event that triggered the function, in this case
//     // the 'click' event
//   }

//   return (
//     <button onClick={(event) => shoot("Goal!", event)}> Take the shot! </button>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);



//5a React Conditional Rendering using an if statement
// function MissedGoal() {
//   return <h1> Missed! </h1>
// }

// function MadeGoal() {
//   return <h1> Goal!! </h1>
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal />;
//   } 
//   return <MissedGoal />;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={true} />)




//5b React Conditional Formatting using the Logical && Operator 
// if cars.length > 0, the expression after && will render
// function Garage(props) {
//   const cars = props.cars;
//   return (
//     <>
//       <h1>Garage</h1>
//       {cars.length > 0 && 
//         <h2> 
//           You have {cars.length} cars in your garage.
//         </h2>
//       }
//     </>
//   )
// }

// const cars = ['Ford', 'Toyota'];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage cars={cars} />);


//5b React Conditional Formatting with the Ternary Operator
// Note the () and {} to allow for expressions. 
// function MissedGoal() {
//   return <h1> Missed! </h1>
// }

// function MadeGoal() {
//   return <h1> Goal!! </h1>
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   return (
//     <>
//       { isGoal ? <MadeGoal/> : <MissedGoal/> }
//     </>
//   );
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={true} />)


//6a React Lists
function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'Toyota'}, 
    {id: 3, brand: 'Audi'}];
  return (
    <>

      <h1> Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>

    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

//3a Importing components from other files
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);