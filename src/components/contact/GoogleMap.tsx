import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';
import './index.css';

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY as string,
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        />
      )}
    </div>
  );
};

export default App;
