var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, hashHistory } from 'react-router';

var Header = React.createClass({

    render: function () {
        return (
            <div className="navbar navbar-default navbar-static-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        {this.props.showBack ? <BackButton/> : null }
                        <h1 className="navbar-brand">{this.props.text}</h1>
                    </div>
                </div>
            </div>
        );
    }
});

var BackButton = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    goBack(){
        this.context.router.push("/");
    },

    render(){
        return (
            <button type="button" className="btn btn-default navbar-btn" onClick={this.goBack}>Back</button>
        )
    }
});

var Page1 = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    goToPage2: function(event){
        this.context.router.push("/page2");
    },

    render: function(){
        return (
            <div>
                <Header text="Hello World..." showBack={false}/>
                <button className="btn btn-large btn-primary" onClick={this.goToPage2}>Go to Page 2</button>
            </div>

        )
    }
});

var Page2 = React.createClass({

    render: function(){
        return (
            <div>
                <Header text="Hello Page 2" showBack={true}/>
                <h1>Page2</h1>
            </div>
        )
    }

});

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Page1}/>
        <Route path="/page2" component={Page2}/>
    </Router>
)

ReactDOM.render(routes, document.querySelector('#app'));