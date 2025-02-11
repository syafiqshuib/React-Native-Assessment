import { useDebouncedCallback } from 'use-debounce';

export const debouncedFetchData = (getData) => {
    return useDebouncedCallback(() => {
        getData();
    }, 0);
};

export const handleScroll = (isMounted, debouncedFetchData, loading) =>
    ({ layoutMeasurement, contentOffset, contentSize }) => {
        if (isMounted) {
            const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
            if (isEndReached && !loading) {
                debouncedFetchData();
            }
        }
    };
