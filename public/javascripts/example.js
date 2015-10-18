// var data = [
//   { author: "Yuji Takaesu", text: "This is one comment" },
//   { author: "Jordan Walke", text: "This is ***anoother*** comment" }
// ]

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Commnts</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

var key = 0;
var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment){
      return (
        <Comment author={comment.author} key={key++}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className='commentList'>
        {commentNodes}
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className='commentForm'>
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
