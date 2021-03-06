import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      // successとerrorで指定している bindメソッドについて
      // JavaScript の超便利なメソッド bind で this を制御する | http://foreignkey.jp/archives/763
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
    // サーバにPOSTするよりも先にsetStateで設定してあげることでレスポンスが早く感じる
    var comments = this.state.data;
    this.setState({ data: comments.concat([comment]) });

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        console.table(data);
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    console.log(comment);
    console.log('サーバへポスト');
  },
  getInitialState: function() {
    return {data: []};
  },
  // componentDidMount はコンポーネントがレンダリングされたときに React が自動的に呼び出すメソッド
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Commnts</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

var key = 0;
var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
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
  handleSubmit: function(e) {
    e.preventDefault();
    //this.refs はDOMノードのrefの参照
    var author = this.refs.author.value.trim();
    var text = this.refs.text.value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.refs.author.value = '';
    this.refs.text.value = '';
    return;
  },
  render: function() {
    return (
      <form className='commentForm' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Your Name' ref='author' />
        <input type='text' placeholder='Say something' ref='text' />
        <input type='submit' placeholder='Post' />
      </form>
    );
  }
});

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
