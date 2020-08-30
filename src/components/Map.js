import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

import { getDepartamentos } from '../helpers/requestHelpers';

import '../styles/components/Map.scss';

function MapComp() {
  const dispatch = useDispatch();
  const departamentos = useSelector((state) => state.toJS().departamentos);
  const [selectedDep, setSelectedDep] = useState(null);
  const [selectedCant, setSelectedCant] = useState(0);

  useEffect(() => {
    if (!departamentos || departamentos.length === 0) {
      getDepartamentos(dispatch);
    }
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedDep(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  useEffect(() => {
    if (departamentos && departamentos.length > 0 && selectedDep) {
      const selected = departamentos.find(
        (departamento) => departamento.departamento === selectedDep.dep
      );
      setSelectedCant((selected && selected.cantidad) || 0);
    }
  }, [departamentos, selectedDep]);

  const ubicaciones = [
    { dep: 'MONTEVIDEO', lat: -34.90328, lng: -56.18816 },
    { dep: 'SALTO', lat: -31.38333, lng: -57.96667 },
    { dep: 'PAYSANDU', lat: -32.3171, lng: -58.08072 },
    { dep: 'RIVERA', lat: -30.90534, lng: -55.55076 },
    { dep: 'SORIANO', lat: -33.2524, lng: -58.03047 },
    { dep: 'ARTIGAS', lat: -30.4, lng: -56.46667 },
    { dep: 'MALDONADO', lat: -34.9, lng: -54.95 },
    { dep: 'FLORIDA', lat: -34.09556, lng: -56.21417 },
    { dep: 'CERRO LARGO', lat: -32.37028, lng: -54.1675 },
    { dep: 'LAVALLEJA', lat: -34.37589, lng: -55.23771 },
    { dep: 'RIO NEGRO', lat: -33.11651, lng: -58.31067 },
    { dep: 'CANELONES', lat: -34.52278, lng: -56.27778 },
    { dep: 'DURAZNO', lat: -33.38056, lng: -56.52361 },
    { dep: 'COLONIA', lat: -34.46262, lng: -57.83976 },
    { dep: 'FLORES', lat: -33.5165, lng: -56.89957 },
    { dep: 'SAN JOSE', lat: -34.33888, lng: -56.72195 },
    { dep: 'TACUAREMBO', lat: -31.72005, lng: -55.99944 },
    { dep: 'ROCHA', lat: -34.4799, lng: -54.3455 },
    { dep: 'TREINTA Y TRES', lat: -33.23012, lng: -54.40837 },
  ];

  return (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{ lat: -32.805302, lng: -56.518181 }}
    >
      {ubicaciones &&
        ubicaciones.map((item) => (
          <Marker
            key={item.dep}
            position={{
              lat: item.lat,
              lng: item.lng,
            }}
            onClick={() => {
              setSelectedDep(item);
            }}
            icon={{
              scaledSize: new window.google.maps.Size(25, 25),
            }}
          />
        ))}
      {selectedDep && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedDep(null);
          }}
          position={{
            lat: selectedDep.lat,
            lng: selectedDep.lng,
          }}
        >
          <div>
            <h2>{selectedDep.dep}</h2>
            <p>Casos confirmados: {selectedCant}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(MapComp));

export default function MapContainer() {
  return (
    <div className='map'>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${'AIzaSyApUdPDCrjOIVEGCxx9YSTIO4KmZTjwGcU'}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
