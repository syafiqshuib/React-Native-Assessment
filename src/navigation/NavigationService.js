import { CommonActions, StackActions } from '@react-navigation/native';

let navigator;

export const setNavigator = (nav) => {
	navigator = nav;
};

export const navigate = (routeName, params = {}) => {
	if (navigator) {
		navigator.dispatch(
			CommonActions.navigate({
				name: routeName,
				params,
			})
		);
	}
};

export const replace = (routeName, params = {}) => {
	if (navigator) {
		navigator.dispatch(
			StackActions.replace(routeName, params)
		);
	}
};


export const goBack = () => {
	if (navigator) {
		navigator.dispatch(CommonActions.goBack());
	}
};
