import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-slate-400 text-blue py-4">
      <div className="container mx-auto flex items-center">
        <p className="text-sm">
          Paulo Pereira &copy; {new Date().getFullYear()}{" - "}
          <a
            href="mailto: drlund@hotmail.com"
            className="text-blue hover:text-blue-700"
          >
            drlund@hotmail.com{" "}
       </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
