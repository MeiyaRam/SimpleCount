const actions = {
	setIncreaseCount: (context) =>
		({ count: context.state.count + 1 }),

	setDecreaseCount: (context) =>
		({ count: context.state.count - 1 }),

	setFirstName: (context) =>
		({ firstName: context.data }),

	setSelectedCountry: (context) =>
		({ selectedCountry: context.data }),

	setSelectedColor: (context) =>
		({ selectedColor: context.data }),

	setSelectedCheckBox: ({ state: { checkedCourse }, data }) =>
		({
			checkedCourse: {
				...checkedCourse,
				[data]:
				!checkedCourse[data],
			},
		}),
};

export default actions;
