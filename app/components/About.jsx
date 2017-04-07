var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is Weather Application build on React. The purpose
        of this programm is to enable quick Search querys for
        your input and rendering the weather of the searched location.
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This is
            the used Javascript framework.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - This
            is the API used for fetching the weather data.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
