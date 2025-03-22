import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-screen h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl text-gray-400 mb-8 max-w-md text-center">
        Check out my interactive guestbook where you can leave a message after
        signing in with GitHub.
      </p>
      <Button asChild size="lg">
        <Link to="/guestbook">Visit Guestbook</Link>
      </Button>
    </div>
  );
}

export default Home;
