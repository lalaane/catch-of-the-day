import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
	state = {
		fishes: {},
		order: {},
	};

	componentDidMount() {
		const { params } = this.props.match;
		// first reinstate oru localStorage
		const localStorageRef = localStorage.getItem(params.storeId);
		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) });
		}
		//reference to the piece of data in the db
		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: 'fishes',
		});
	}

	componentDidUpdate() {
		localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
	}

	// cleaning up
	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	addFish = fish => {
		// take a copy of the existing state
		const fishes = { ...this.state.fishes };
		// add our new fish to fishes variable
		fishes[`fish${Date.now()}`] = fish;
		// set the new fishes obj to state
		this.setState({ fishes });
	};
	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};

	updateFish = (key, updatedFish) => {
		// take a copy of the current state
		const fishes = { ...this.state.fishes };
		// update that state
		fishes[key] = updatedFish;
		// set that to state
		this.setState({ fishes });
	};

	addToOrder = key => {
		// copy of state
		const order = { ...this.state.order };
		// either add to the order, or update the number in our order
		order[key] = order[key] + 1 || 1;
		// call setState to update state obj
		this.setState({ order });
	};

	render() {
		return (
			<div className='catch-of-the-day'>
				<div className='menu'>
					<Header tagline='Fresh seafood market' />
					<ul className='fishes'>
						{Object.keys(this.state.fishes).map(key => (
							<Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
						))}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order} />
				<Inventory
					addFish={this.addFish}
					updateFish={this.updateFish}
					loadSampleFishes={this.loadSampleFishes}
					fishes={this.state.fishes}
				/>
			</div>
		);
	}
}

export default App;
