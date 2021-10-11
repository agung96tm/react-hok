import { renderHook, act } from '@testing-library/react-hooks'
import { useOnline } from '../lib';

test.skip('should be online', () => {
    /* find solution to test `window` */
    renderHook(() => useOnline());
});
