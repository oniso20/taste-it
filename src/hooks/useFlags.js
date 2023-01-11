import { useEffect, useState } from "react";

const useFlags = () => {
    const [flags, setFlags] = useState(null);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then((response) => response.json())
            .then((data) => {
                setFlags(data);
            });
    }, []);

    return flags;
};

export default useFlags;
