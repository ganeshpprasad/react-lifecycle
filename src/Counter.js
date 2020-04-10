import React, { Component } from 'react';

export class Counter extends Component {
	constructor(props) {
		super(props);
		console.log('Counter constr');

		this.state = {
			count: 0,
		};
	}

	componentDidMount() {
		console.log('Counter did mount');
	}

	componentWillUnmount() {
		console.log('Counter will unmount');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Counter got derived state', props, state);
		return null;
	}

	componentDidUpdate(prest, preprop, ss) {
		console.log('Counter comp did update', prest, preprop, ss);
	}

	updateCounter = () => {
		this.props.set();
		this.setState((prev, props) => ({ ...prev, count: prev.count + 1 }));
	};
	render() {
		return (
			<div>
				<span>Counter</span>
				<br />
				<span>{this.state.count}</span>
				<button onClick={this.updateCounter}>+</button>
			</div>
		);
	}
}

export default Counter;
