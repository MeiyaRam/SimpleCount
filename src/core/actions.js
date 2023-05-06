const actions = {
	setIncreaseCount: (context) =>
		({ count: context.state.count + 1 }),

	setDecreaseCount: (context) =>
		({ count: context.state.count - 1 }),

};

export default actions;
