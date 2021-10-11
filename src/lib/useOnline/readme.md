# useOnline


### How to use:
```js
import { useOnline } from 'react-hok';

const GreetingView = () => {
    const isOnline = useOnline();

    return (
        <div>
            {isOnline ? (
                <div>
                    Hello, Friend :)
                </div>
            ) : (
                <div>
                    You're offline :'(
                </div>
            )}
        </div>
    )
}
```
