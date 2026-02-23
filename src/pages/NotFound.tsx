import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import { Header } from "@/components/Header";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-lg">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="text-[10rem] font-display font-bold leading-none gradient-text mb-4"
            >
              404
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold mb-3"
            >
              Page Not Found
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground mb-8"
            >
              The page <code className="text-primary font-mono text-sm">{location.pathname}</code> doesn't exist or has been moved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 justify-center"
            >
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
              </Button>
              <Link to="/">
                <Button className="gradient-bg text-white">
                  <Home className="mr-2 h-4 w-4" /> Go Home
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
