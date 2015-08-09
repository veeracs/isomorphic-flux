var React = require("React");
var ApplicationStore = require("../stores/ApplicationStore");
var Home = require("./Home.jsx");
var About = require("./About.jsx");
var FluxibleMixin = require("fluxible/addons/FluxibleMixin");

var Application = React.createClass({
	mixins: [FluxibleMixin],
	getInitialState: function() {
		this.getStore(ApplicationStore).getState();
	},
	render: function() {
		return (
			<div>
				{"Home" === this.state.currentPageName ? <Home /> : <About />}
			</div>
		);
	}
});

module.exports = Application;