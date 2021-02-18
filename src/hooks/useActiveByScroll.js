import {useEffect, useState} from "react";

export const useActiveByScroll = (point) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > point) {
                setActive(true)
            } else {
                setActive(false)
            }
        })
    },[point])

    return active;
}