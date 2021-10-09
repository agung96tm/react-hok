import { useEffect, useState } from 'react';

const useDidMount = (initValue = false) => {
    const [didMount, setDidMount] = useState(initValue);

    useEffect(() => {
        setDidMount(true);
        return () => {
            setDidMount(false);
        };
    }, []);

    return didMount;
};

export default useDidMount;