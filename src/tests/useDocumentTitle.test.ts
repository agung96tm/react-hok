import { renderHook, act } from '@testing-library/react-hooks'
import { useDocumentTitle } from '../lib/useDocumentTitle';

test('should document title change', () => {
    renderHook(() => useDocumentTitle('The Awesome'));
    expect(document.title).toBe('The Awesome');
});
