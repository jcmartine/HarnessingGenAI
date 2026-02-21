1. Project Overview
Book_A_Taxi is a high-performance, single-page application (SPA) built to streamline the urban transportation experience. Developed using React 19, the app features dynamic routing and a responsive, mobile-first design tailored for users on the go.

2. Architecture Write-Up
The application follows a modular, component-based architecture to ensure scalability and ease of maintenance:

Frontend Framework: React 19, utilizing Functional Components and Hooks (useState, useEffect) for state management.

Routing: React Router DOM manages seamless navigation between Home, About, Services, and Booking views without page reloads.

Styling: Tailwind CSS provides a utility-first styling approach, ensuring a consistent yellow-and-black "Taxi" theme across all devices.

Asset Management: Organized directory structure separating Components (reusable UI) and Pages (route-specific views).

3. Project User Stories
To guide development, the following user stories were implemented to ensure a user-centric experience:

As a User, I want to navigate between different sections (Home, Services, Contact) so that I can learn about the company without the page refreshing.

As a Rider, I want a clear "Book Now" interface so that I can quickly request a taxi in an emergency.

As a Customer, I want a responsive design that works perfectly on my smartphone while I am standing on a street corner.

As an Administrator, I want a clean code structure so that future features (like GPS tracking) can be integrated easily.

4. Project Git Repositories
The source code and version history for this project are maintained on GitHub:

Main Repository: https://github.com/jcmartine/HarnessingGenAI.git

Branching Strategy: The project utilizes a main branch for stable releases.

5. How to Run
Follow these steps to set up the development environment on your local machine:

Prerequisites
Node.js (v18 or higher recommended)

npm (Node Package Manager)

Installation and execution

1. Clone the repository:
git clone https://github.com/jcmartine/HarnessingGenAI.git
2. Navigate into the directory:
cd book_a_taxi
3. Install dependencies:
npm install
4. Start the development server:
npm start
5. View the app:
Open http://localhost:3000 in your browser.