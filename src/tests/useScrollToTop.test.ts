import { renderHook, act } from '@testing-library/react-hooks'
import { useScrollToTop } from '../lib';

test.skip('should scroll to top', () => {
    /* find solution to test `window` */
    renderHook(() => useScrollToTop());
});
