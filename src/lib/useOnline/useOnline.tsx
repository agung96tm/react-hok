import { useEffect, useState } from "react"


const useOnline = () => {
    const [isOnline, setIsOnline] = useState<boolean>(
        typeof navigator != "undefined" &&
        typeof navigator.onLine === "boolean" ? navigator.onLine : true
    );

    const currentOnline = () => setIsOnline(true);
    const currentOffline = () => setIsOnline(false);

    useEffect(() => {
        window.addEventListener("online", currentOnline);
        window.addEventListener("online", currentOffline);

        return () => {
            window.removeEventListener("online", currentOnline);
            window.removeEventListener("online", currentOffline);
        }
    });

    return isOnline;
}

export default useOnline;
