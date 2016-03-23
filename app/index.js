var React = require('react');
var ReactDOM = require('react-dom');

// fn(d) = v
// function(data) = view

var OfferThumbnail = React.createClass({
	render: function () {
		return <img src={this.props.thumbnail}  />
	}
});

var offerName = React.createClass({
	render: function () {
		return (
			<h1 className="card--product__title">
				{this.props.children}
			</h1>
		)
	}
});

var Card = React.createClass({
	render: function () {
		return (
			<div className="bui-card card--product">
				<OfferThumbnail thumbnail={this.props.products.offers[0].offerThumbnail} />
				<OfferName />
			</div>
		)
	}
})

ReactDOM.render(
	<Card products={PRODUCTS} />,
	document.getElementById('app')
);








// var HelloWorld = React.createClass({
// 	render: function () {
// 		// this.props returns a object with both properties
// 		// kinda like {name: tyler, anySortOfData: 29}
// 		console.log(this.props)
// 		return (
// 			<div> Hello Paula </div>
// 		)
// 	}
// });

// ReactDOM.render(
// 	<HelloWorld name="Tyler" anySortOfData={29} />,
// 	document.getElementById('app')
// );
