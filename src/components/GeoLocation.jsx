import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for missing marker icons in Leaflet + Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: markerIcon2x,
	iconUrl: markerIcon,
	shadowUrl: markerShadow,
});

export default function GeoLocation() {
	const position = [12.0022, 8.5919]; // Example: Kano, Nigeria (change to your location)

	return (
		<section className='relative rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px]'>
			<MapContainer center={position} zoom={13} scrollWheelZoom={false} className='h-full w-full'>
				<TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
				<Marker position={position}>
					<Popup>
						<strong>Our Office</strong>
						<br />
						Kano, Nigeria
					</Popup>
				</Marker>
			</MapContainer>
		</section>
	);
}
