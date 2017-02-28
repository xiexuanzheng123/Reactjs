var UserGist = React.createClass({
    getInitialState: function() {
        return {
            username: '',
            lastGistUrl: ''
        };
    },
    componentDidMount: function() {
        this.serverRequest = $.get(this.props.source, function(result) {
            var lastGist = result[0];
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            }.bind(this));
        })
    },
    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
    render: function() {
        return(
            <div>
                {this.state.username} New Gist url:
                <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
            </div>
        );
    }
});
ReactDOM.render(
    <UserGist source = '' />,
    mountNode
);