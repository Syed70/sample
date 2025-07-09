import React, { useEffect, useRef } from "react";

const Map = ({ children, selectedCinema }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google) {
      console.error("Google Maps API is not available.");
      return;
    }

    if (!window.mapRef && mapRef.current) {
      window.mapRef = new window.google.maps.Map(mapRef.current, {
        center: { lat: -33.865143, lng: 151.2099 }, // Default: Sydney
        zoom: 10,
      });
    }

    if (selectedCinema && window.mapRef) {
      const { lat, lng } = selectedCinema;
      const center = new window.google.maps.LatLng(lat, lng);
      window.mapRef.panTo(center);
    }
  }, [selectedCinema]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div ref={mapRef} style={{ height: "400px", width: "100%" }} />
      {children}
    </div>
  );
};

export default Map;
