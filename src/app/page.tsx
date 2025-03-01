import Map from "./components/map";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100 p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">
        Interactive Leaflet Map
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-lg">
        A React-based interactive map built using <span className="font-semibold">Leaflet.js</span> and{" "}
        <span className="font-semibold">React-Leaflet</span>. Click below to explore the documentation.
      </p>

      {/* Leaflet Docs Link */}
      <a
        href="https://react-leaflet.js.org/docs/start-installation/"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        📌 Leaflet Documentation
      </a>

      {/* Map Container */}
      <div className="w-[50vw] h-[50vh] bg-white shadow-lg rounded-lg overflow-hidden border">
        <Map />
      </div>
    </div>
  );
}
