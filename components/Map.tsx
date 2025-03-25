import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
function Map({ address }: { address: string }) {
  const mapRef = useRef(null);
  const mapOptions = {
    center: {
      lat: 24.49843,
      lng: 54.38854,
    },
    zoom: 4,
  };
  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    version: "weekly",
  });
  useEffect(() => {
    // Callback
    loader.loadCallback((e) => {
      if (e) {
        console.log(e);
      } else {
        // @ts-ignore
        new google.maps.Map(mapRef.current, mapOptions);
      }
    });
  }, [address]);
  return <div style={{ height: "400px" }} ref={mapRef} />;
}
export default Map;
