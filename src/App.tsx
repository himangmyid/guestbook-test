import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import { GuestbookPage } from "./components/guestbook";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guestbook" element={<GuestbookPage />} />
          <Route path="/guestbook/*" element={<GuestbookPage />} />
          {/* Add Tempo routes before the catch-all */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
          {/* Catch-all route now points to GuestbookPage for /guestbook paths */}
          <Route path="*" element={<Home />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
