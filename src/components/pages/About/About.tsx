import React from 'react';
import ReactDOMServer from 'react-dom/server';
const pdf = require("html-pdf")

const About = () => {
    const generateComp = () => { 
        // Define the JSX React component
const MyComponent = () => {
    return <div>Hello, World!</div>;
  };
  
  // Render the JSX component as a string
  const componentString = ReactDOMServer.renderToString(<MyComponent />);
  
  // Generate the PDF
  pdf.create(componentString).toFile('component.pdf', (err: any, res: any) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('PDF created successfully!');
  });
     }
      return <><button onClick={generateComp}>Click</button></>
     
}

export default About