import React from "react";
import NavBarMain from "../components/public/navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen transition-colors duration-200 bg-background text-foreground">
      <header className="p-4">
        <NavBarMain />
      </header>
      <main className="p-8">
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-background">
          <div className="relative text-center max-w-3xl mx-auto z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark rounded-2xl opacity-80 blur-lg"></div>
            <div className="relative z-10 bg-background/80 dark:bg-background-dark/80 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-primary dark:text-text-primary-dark mb-6 transition-all duration-300 hover:text-accent dark:hover:text-accent-dark">
                Welcome to My Portfolio
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto mb-8">
                I'm a passionate developer crafting innovative solutions with
                creativity and precision. Explore my work and let's build
                something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <a
                  href="/projects"
                  className="inline-block bg-primary dark:bg-primary-dark text-text-primary-dark dark:text-text-primary font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:bg-secondary dark:hover:bg-secondary-dark hover:text-white hover:shadow-lg hover:-translate-y-1"
                >
                  View Projects
                </a>
                <a
                  href="/contact"
                  className="inline-block bg-transparent border-2 border-primary dark:border-primary-dark text-primary dark:text-primary-dark font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-primary dark:hover:bg-primary-dark hover:text-text-primary-dark dark:hover:text-text-primary hover:shadow-lg hover:-translate-y-1"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
          
        </section>
      </main>
    </div>
  );
};

export default HomePage;
