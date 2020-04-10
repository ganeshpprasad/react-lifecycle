import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		debugger;
		this.state = {
			a: 'b',
		};
	}

	componentDidMount() {
		console.log('App did mount');
	}

	componentWillUnmount() {
		console.log('App will unmount');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('App got derived state', props, state);
		return null;
	}

	componentDidUpdate(prest, preprop, ss) {
		console.log('App comp did update', prest, preprop, ss);
	}

	change = () => {
		this.setState(prev => ({ ...prev, a: 'c' }));
	};
	render() {
		return (
			<div className="App">
				<header className="App-header">
					{/* counter */}
					<Counter a={this.state.a} set={this.change} />
				</header>
			</div>
		);
	}
}

export default App;
