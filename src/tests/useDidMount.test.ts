import { renderHook, act } from '@testing-library/react-hooks'
import { useDidMount } from '../lib';

test.skip('should did mount', () => {
    /* find solution to test this hook */
    renderHook(() => useDidMount());
});
