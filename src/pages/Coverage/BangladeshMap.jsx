import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import FlyToLocation from './FlyToLocation';

const BangladeshMap = ({ serviceData, searchQuery }) => {
    console.log(serviceData);

    const [userLocation, setUserLocation] = useState(null);
    const [targetPosition, setTargetPosition] = useState(null);
    useEffect(() => {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = [position.coords.latitude, position.coords.longitude];
                setUserLocation(pos);
                setTargetPosition(pos);
            },
            (error) => {
                console.log("Location denied");
                // fallback: center Bangladesh
                setTargetPosition([23.685, 90.3563]);
            }
        );

    }, [])

    useEffect(() => {
        if (!searchQuery) return;
        const q = searchQuery.trim().toLowerCase();
        const matched = serviceData?.find(
            (item) => item.district?.toLowerCase().includes(q)
        );

        if (matched) {
            setTargetPosition([matched.latitude, matched.longitude]);
        } else {
            alert("No matching district found");
        }
    }, [searchQuery, serviceData])
    const redIcon = new L.Icon({
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
        shadowUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });
    return (
        <div className="w-full 
                h-[320px] 
                sm:h-[420px] 
                md:h-[520px] 
                lg:h-[600px] 
                rounded-2xl 
                overflow-hidden">
            <MapContainer
                center={[23.685, 90.3563]}
                zoom={7}
                className="w-full h-full"
            >
                <TileLayer
                    attribution="© OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FlyToLocation position={targetPosition} />

                {userLocation && (
                    <Marker position={userLocation} icon={redIcon}>
                        <Popup>Your current location</Popup>
                    </Marker>
                )}

                {Array.isArray(serviceData) &&
                    serviceData.map((item, index) => (
                        <Marker key={index} position={[item.latitude, item.longitude]}>
                            <Popup>
                                {Array.isArray(item.covered_area)
                                    ? item.covered_area.join(", ")
                                    : "Coverage info not available"}
                            </Popup>
                        </Marker>
                    ))}
            </MapContainer>
        </div>

    );
};

export default BangladeshMap;