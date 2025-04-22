export default function MobileApp() {
  return (
    <div>
      {/* Top Bar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f4f4f4' }}>
        <h1 style={{ margin: 0 }}>MFR</h1>
      </div>

      {/* Main Content */}
      <div style={{ padding: '20px' }}>
        <h1>Mobile app</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Footer */}
      <footer style={{ padding: '10px', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
        <a href="/resume" style={{ margin: '0 10px' }}>Resume</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>LinkedIn</a>
      </footer>
    </div>
  );
}
