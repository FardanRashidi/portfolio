import Link from "next/link"

export default function MobileApp() {
  return (
    <div>
      {/* Top Bar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Fardan Rashidi</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Work In Progress Section */}
      <section className="w-full h-screen flex items-center justify-center bg-gray-200">
        <p className="text-2xl font-bold">Work In Progress...</p>
      </section>

      {/* Main Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: '10px', padding: '20px', marginBottom: '40px' }}>
        {/* Overview spanning row 1 and row 2, column 1 */}
        <div style={{ gridColumn: '1', gridRow: '1 / span 2' }}>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Overview</p>
          <p>This documentation outlines the development process of my application, built using React Native and Supabase. The project focuses on creating a seamless interface for interacting with a glucose monitoring system, enabling real-time data handling and user engagement through modern mobile technology.</p>
        </div>

        {/* My role */}
        <div style={{ gridColumn: '2', gridRow: '1' , paddingTop: '10px' }}>
          <p><strong>My role:</strong> UI Designer, Lead Developer</p>
        </div>

        {/* Timeline */}
        <div style={{ gridColumn: '3', gridRow: '1', paddingTop: '10px' }}>
          <p><strong>Timeline:</strong> </p>
        </div>

        {/* Tools used */}
        <div style={{ gridColumn: '2', gridRow: '2' }}>
          <p><strong>Tools used:</strong> React Native, Expo, Supabase, Supabase Auth, Github</p>
        </div>

        {/* Context */}
        <div style={{ gridColumn: '3', gridRow: '2' }}>
          <p><strong>Context:</strong> Project for Clients Glucose Monitoring System</p>
        </div>
      </div>

      {/* The Process */}
      <div style={{ padding: '20px', marginBottom: '40px' }}>
        <p style={{ fontSize: '24px', fontWeight: 'bold' , marginBottom: '20px'}}>The Process</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10px' }}>
          <div>
            <p style={{marginBottom: '20px'}}><strong>Step 1:</strong> Research and Planning</p>
            <p>Understanding the requirements and planning the architecture.</p>
              </div>
              <div>
            <p style={{marginBottom: '20px'}}><strong>Step 2:</strong> Design</p>
            <p>Discussing UI designs for the application.</p>
              </div>
              <div>
            <p style={{marginBottom: '20px'}}><strong>Step 3:</strong> Development</p>
            <p>Building the application using React Native and Supabase.</p>
              </div>
              <div>
            <p style={{marginBottom: '20px'}}><strong>Step 4:</strong> Testing and Deployment</p>
            <p>Ensuring functionality and deploying the app.</p>
          </div>
        </div>
      </div>

      {/* The Design */}
      <div style={{ padding: '20px' }}>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>The Design</p>
        
      </div>


      {/* Footer */}
      <footer style={{ padding: '10px', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
        <a href="https://github.com/FardanRashidi/resume" target="_blank" rel="noopenner noreferrer" style={{ margin: '0 10px' }}>Resume</a>
        <a href="https://github.com/FardanRashidi" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>GitHub</a>
        <a href="https://linkedin.com/in/fardanrashidi" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>LinkedIn</a>
      </footer>
    </div>
  );
}
