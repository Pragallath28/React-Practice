class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='challenge-node'>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
};
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));

// Change code below this line