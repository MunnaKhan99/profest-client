import { useMap } from "react-leaflet";
import { useEffect } from "react";

const FlyToLocation = ({ position }) => {
    const map = useMap();

    useEffect(() => {
        if (position) {
            map.flyTo(position, 10, { duration: 1.5 });
        }
    }, [position]);

    return null;
};

export default FlyToLocation