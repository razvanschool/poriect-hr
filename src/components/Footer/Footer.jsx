import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 footer-fixed">
      <div className="bg-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} Copyright:{" "}
        <a
          href="https://HR-ITSCHOOL.com"
          className="text-blue-400 hover:underline"
        >
          HR-ITSCHOOL.com
        </a>
      </div>
    </footer>
  );
}
