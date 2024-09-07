import { Map, MapMarker } from 'react-kakao-maps-sdk';

// 카카오맵 출력 컴포넌트
export default function KakaoMap({ location }) {
  return (
    <Map center={location} style={{ width: '300px', height: '360px' }}>
      <MapMarker position={location}>
        {/*<div style={{ color: '#000' }}>Hello World!</div>*/}
      </MapMarker>
    </Map>
  );
}
