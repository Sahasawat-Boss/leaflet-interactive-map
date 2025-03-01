"use client"; // Ensure CSR (Client Side Rendering)

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles

// Dynamically import Leaflet components to prevent SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const position: [number, number] = [18.803908,99.018455]; // Define type explicitly

const Map = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <p>Loading map...</p>; // Prevents rendering before the window is available
    }

    return (
        <div className="relative w-full h-full"> {/* Ensure proper height & width */}
            <MapContainer
                center={position as L.LatLngExpression}
                zoom={20}  //Map Zoom level
                scrollWheelZoom={false}
                className="w-full h-full" // Make sure the map takes the full container space
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
