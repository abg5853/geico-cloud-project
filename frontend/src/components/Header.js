import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">GEICO Claim Viewer</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/claims" className="hover:underline">Claims</Link>
      </nav>
    </header>
  );
}
