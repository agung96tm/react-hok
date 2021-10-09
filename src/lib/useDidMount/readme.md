# useDidMount


### How to use:
```js
import { useDidMount } from 'react-hok';
import { useEffect } from 'react';

const LoginView = () => {
    const didMount = useDidMount();
    // same as: const didMount = useDidMount(false);
    
    useEffect(() => {
        if(didMount) {
            /* do something */
        } 
    });
    
    return (
        <div></div>
    )
}
```

## Args

 Attribute   | Description                                          | Type                             | Default     |
 ----------- | ---------------------------------------------------- | -------------------------------- | ----------- |
 `initValue` |                                                      | `boolean`                        | false       |
