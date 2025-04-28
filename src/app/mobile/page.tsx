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
      <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: '10px', padding: '20px', marginBottom: '40px' }}>
          {/* Overview spanning row 1 and row 2, column 1 */}
          <div style={{ gridColumn: '1', gridRow: '1 / span 2', paddingRight: 50 }}>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Overview</p>
            <p>This documentation outlines the development process of my application, built using React Native and Supabase. The project focuses on creating a seamless interface for interacting with a glucose monitoring system, enabling real-time data handling and user engagement through a mobile application.</p>
          </div>

          {/* My role */}
          <div style={{ gridColumn: '2', gridRow: '1', paddingTop: '10px' }}>
            <p><strong>My role:</strong> UI Designer, Lead Developer</p>
          </div>

          {/* Timeline */}
          <div style={{ gridColumn: '3', gridRow: '1', paddingTop: '10px' }}>
            <p><strong>Timeline:</strong> 4 Weeks</p>
          </div>

          {/* Tools used */}
          <div style={{ gridColumn: '2', gridRow: '2' }}>
            <p><strong>Tools used:</strong> React Native, TypeScript, Supabase, Supabase Auth, Github</p>
          </div>

          {/* Context */}
          <div style={{ gridColumn: '3', gridRow: '2' }}>
            <p><strong>Context:</strong> Project for Clients Glucose Monitoring System</p>
          </div>
        </div>

        {/* The Process */}
        <div style={{ padding: '20px', marginBottom: '40px' }}>
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>The Process</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10px' }}>
            <div>
              <p style={{ marginBottom: '20px' }}><strong>Step 1:</strong> Research and Planning</p>
              <p>Understanding the requirements and planning the architecture.</p>
            </div>
            <div>
              <p style={{ marginBottom: '20px' }}><strong>Step 2:</strong> Design</p>
              <p>Discussing UI designs for the application.</p>
            </div>
            <div>
              <p style={{ marginBottom: '20px' }}><strong>Step 3:</strong> Development</p>
              <p>Building the application using React Native and Supabase.</p>
            </div>
            <div>
              <p style={{ marginBottom: '20px' }}><strong>Step 4:</strong> Testing and Deployment</p>
              <p>Ensuring functionality and deploying the app.</p>
            </div>
          </div>
        </div>


        {/* The Design */}
        <div style={{ padding: '20px', marginBottom: '40px' }}>
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>The Design</p>
          <div>
            <p>The design basically is separated into 2 parts: Patients and Doctors. This design ensures the app interaction is easy to use and yet informative. Here are the pages with some context on how it works.</p>
          </div>
          <div>
            <img
              src="/images/startup.png"
              alt="Startup Overview"
              style={{ width: '100%', borderRadius: '8px', marginBottom: '20px', marginTop: '40px' }}
            />
          </div>
          <div>
            <p>
              First and foremost, the login page. This is where the user will enter their credentials to access the app. The design is simple and straightforward, ensuring that users can easily log in without any confusion. Next to it is none other than the sign up page, where users will be able to create their account as a Patient or Doctor (It's not recommend for anyone to just create a doctor but for this context lets just say they can. Ideally it would either be from the company or the hospitals authority).
            </p>
          </div>
          {/* Patients side */}
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Patients Side</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '40px' }}>
            <div>
              <p>
                After logging in, the user will be directed to the dashboard. This is where the user will be able to see their latest glucose levels from the glucose monitoring system and input whether they are fasting, just before eating, or after eating. In the context of this project, the user will be able to compare the glucose monitoring system with their own finger pricking test results.
              </p>
            </div>
            <div>
              <img
                src="/images/dashboard.png"
                alt="Dashboard"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
              />
            </div>
            <div>
              <img
                src="/images/history.png"
                alt="History"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
              />
            </div>
            <div>
              <p>
                The history page is where the user will be able to see their glucose levels over time. This is where the user will be able to see their progress and how they are doing.
              </p>
            </div>
            <div>
              <p>
                As most apps will have, the profile page is where the user will be able to see their profile and edit their information.
              </p>
            </div>
            <div>
              <img
                src="/images/profile.png"
                alt="Profile"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
              />
            </div>
          </div>
          {/* Doctors side */}
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Doctors Side</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '40px' }}>
            <div>
              <p>
                After logging in, the user will be directed to the dashboard. This is where the user will be able to see their latest glucose levels from the glucose monitoring system and input whether they are fasting, just before eating, or after eating. In the context of this project, the user will be able to compare the glucose monitoring system with their own finger pricking test results.
              </p>
            </div>
            <div>
              <img
                src="/images/dashboard.png"
                alt="Dashboard"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
              />
            </div>
            <div>
              <img
                src="/images/history.png"
                alt="History"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
              />
            </div>
            <div>
              <p>
                The history page is where the user will be able to see their glucose levels over time. This is where the user will be able to see their progress and how they are doing.
              </p>
            </div>
            <div>
              <p>
                As most apps will have, the profile page is where the user will be able to see their profile and edit their information.
              </p>
            </div>
            <div>
              <img
                src="/images/profile.png"
                alt="Profile"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
              />
            </div>
          </div>
        </div>

        {/* What I've Learned */}
        <div style={{ padding: '20px', marginBottom: '40px' }}>
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>What I've Learned</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <p>This was a collab project with a Master's Degree Student that created the Non-Invasive Glucose Monitoring System. Working with this app was really exciting since I learned a lot on diabetes and ways to monitor it. I had worked with Supabase during my university days, so returning to it felt refreshing. React Native was new to me, but I had prior experience in mobile development. <br /> <br /> If there was more time and resources, I would love to make this project into an actual product for the general public to use.</p>
            </div>
            <div>
              <p>Next Steps: <br /> I think there are more things I could add on to it, stuff like API integrations, syncing with Apple Health or Googles thing, or even the whole doctors process could've been more detailed and refined. Heck maybe modern smart watches could measure blood glucose and everything can be handled there.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #ccc' }} />
      <footer style={{ padding: '10px', backgroundColor: '#f4f4f4', textAlign: 'center', marginBottom: '20px' }}>
        <a href="https://github.com/FardanRashidi/resume" target="_blank" rel="noopenner noreferrer" style={{ margin: '0 10px' }}>Resume</a>
        <a href="https://github.com/FardanRashidi" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>GitHub</a>
        <a href="https://linkedin.com/in/fardanrashidi" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>LinkedIn</a>
      </footer>
    </div>
  );
}
