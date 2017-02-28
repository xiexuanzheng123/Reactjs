var WebSite = React.createClass({
    getInitialState: function() {
        return {
            name: '菜鸟教程',
            site: 'http://www.runoob.com'
        };
    },
    render: function() {
        return (
            <div>
                <Name name = {this.state.name} />
                <Link site = {this.state.site} />
            </div>
        );
    }
});

var Name = React.createClass({
    render: function() {
        return (
            <h1>{this.props.name}</h1>
        )
    }
});
var Link = React.createClass({
    render: function() {
        return (
            <a href='#'>{this.props.site}</a>
        )
    }
})