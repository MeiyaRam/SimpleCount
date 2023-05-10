const actions = {

	setIncreaseCount: (context) =>
		({ count: context.state.count + 1 }),

	setDecreaseCount: (context) =>
		({ count: context.state.count - 1 }),

	setFirstName: (context) =>
		({ firstName: context.data }),

	setSelectedCountry: (context) =>
		({ selectedCountry: context.data }),

};

export default actions;
