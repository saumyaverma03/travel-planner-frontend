
# Travel Planner

A full-stack travel itinerary planning application that helps users organize trips, discover destinations, and generate personalized travel plans.

The platform allows users to create travel itineraries, explore destinations, and manage their trips through an interactive dashboard. The project is designed to evolve into an AI-powered travel assistant capable of recommending activities, cafés, restaurants, and attractions tailored to each user.

---

## Features

* User authentication (login / logout)
* JWT-based authentication
* Protected routes for authenticated users
* Interactive user dashboard
* Personalized travel itinerary creation
* Google Maps API integration for location discovery
* API-based data fetching
* Form validation
* Responsive UI for multiple devices
* Planned AI travel assistant

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* React Router
* Shadcn UI
* ESLint
* Prettier

### Backend

* Python
* FastAPI
* JWT Authentication
* Pydantic Validation

### AI / Data Layer

* Large Language Models (LLM)
* LangChain / LangGraph (planned)

### External APIs

* Google Maps API

---

## Architecture

| Layer      | Technology         | Responsibility                   |
| ---------- | ------------------ | -------------------------------- |
| Frontend   | React + TypeScript | User interface and interactions  |
| Backend    | FastAPI (Python)   | API endpoints and authentication |
| AI Layer   | LLM + LangChain    | AI itinerary planning            |
| Validation | Zod / Pydantic     | Input validation                 |

---

## Project Structure

```
src
 ├── components
 │    ├── Button
 │    │    ├── Button.tsx
 │    │    └── Button.css
 │
 ├── pages
 │    ├── Login
 │    │    └── LoginPage.tsx
 │
 ├── hooks
 │    └── useAuth.ts
 │
 ├── services
 │    └── api.ts
 │
 ├── types
 │    └── user.ts
 │
 ├── utils
 │    └── helpers.ts
 │
 ├── App.tsx
 └── main.tsx
```

---

## Environment Variables

Create a `.env` file in the project root.

Example:

```
VITE_API_BASE_URL=your_backend_api_url
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

---

## Installation

Clone the repository:

```
git clone https://github.com/saumyaverma03/travel-planner-frontend
```

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

---

## Build

Create a production build:

```
npm run build
```

---

## Inspiration

This project draws inspiration from platforms like Stippl, TripIt, Wanderlog, WonderPlan, TripAdvisor aiming to combine travel planning with intelligent recommendations powered by AI.

---

## Future Improvements

* AI-generated travel itineraries
* Nearby activity recommendations using AI
* Collaborative trip planning
* Saved trips and itinerary management
* Cloud deployment

---

## Deployment

Deployment is planned for a future release.
