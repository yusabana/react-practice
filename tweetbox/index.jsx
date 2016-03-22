var TweetBox = React.createClass({
  getInitialState: function() {
    return {
      text: "",
      photoAdded: false
    };
  },

  handleChange: function(event) {
    this.setState({ text: event.target.value });
  },

  togglePhoto: function(event) {
    this.setState({photoAdded: !this.state.photoAdded});
  },

  remainingCharacters: function() {
    var photoStringSize = this.state.photoAdded ? 23 : 0;
    return 140 - photoStringSize - this.state.text.length;
  },

  overflowAlert: function() {
    if (this.remainingCharacters() < 0) {
      var baseSize = this.state.photoAdded ? 140-23 : 140;

      var beforeOverflowText = this.state.text.substring(baseSize - 10, 140);
      var overflowText = this.state.text.substring(baseSize);

      return (
        <div className="alert alert-warning">
          <strong>Oops! Too Long:</strong>&nbsp;...{beforeOverflowText}<strong className="bg-danger">{overflowText}</strong>
        </div>
      );
    } else {
      return "";
    }
  },

  render: function() {
    return (
      <div className="well clearfix">
        { this.overflowAlert() }
        <textarea className="form-control"
                  onChange={this.handleChange}>
        </textarea>
        <br/>
        <span>{ this.remainingCharacters() }</span>
        <button className="btn btn-primary pull-right"
                disabled={this.remainingCharacters() === 140}>Tweet</button>
        <button className="btn btn-default pull-right" onClick={this.togglePhoto}>{this.state.photoAdded ? "✓ Photo Added" : "Add Photo"}</button>
      </div>
    );
  }
});

ReactDOM.render(
  <TweetBox />,
  document.getElementById("container")
);
