import { createSelector } from 'reselect';
import config from './ShapesBuilderConfig';

const sliceSelector = state => state[config.sliceName];

export const getDataSelector = createSelector(sliceSelector, (slice) => {
	return slice.data;
});

export default {
	getDataSelector
};
