import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <h1 className="font-serif text-6xl md:text-8xl text-foreground mb-6">404</h1>
      <p className="text-muted-foreground text-lg mb-8 text-center max-w-md">
        The page you're looking for doesn't exist.
      </p>
      <Link 
        to="/" 
        className="editorial-link text-sm uppercase tracking-widest text-foreground"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
