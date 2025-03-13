/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SkillCard from "@/components/card/SkillCard";
import envConfig from "@/config/envConfig";
import type { TTechnology } from "@/types/technology.types";

const Technology = () => {
  const [technologies, setTechnologies] = useState<TTechnology[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const data = await fetch(`${envConfig.baseApi}/technologies`, {
          cache: "no-cache",
        });
        const result = await data.json();
        const techs = result?.data || [];
        setTechnologies(techs);

        // Extract unique categories
        const uniqueCategories: string[] = [
          "All",
          ...new Set<string>(
            techs.map((tech: TTechnology) => tech.category || "Other")
          ),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching technologies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  return (
    <section className="relative bg-gradient-to-b from-secondary via-secondary/95 to-secondary/90 py-20 md:py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-1/3 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -left-40 bottom-1/4 w-80 h-80 rounded-full bg-[#745FC9]/10 blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      </div>

      {/* Background text */}
      <div className="absolute left-0 top-10 md:top-20 w-full overflow-hidden select-none pointer-events-none">
        <h1 className="text-7xl md:text-9xl font-black text-gray-400/10 tracking-widest uppercase whitespace-nowrap">
          My Skills
        </h1>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-primary"></span>
            <h3 className="text-lg font-medium text-gray-200 uppercase tracking-wider">
              Technologies
            </h3>
            <span className="h-px w-6 bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            A showcase of the technologies and tools I've mastered throughout my
            journey as a developer.
          </p>
        </motion.div>

        {/* Category filters */}
        {categories.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}

        {/* Skills grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-2xl aspect-square animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
          >
            {filteredTechnologies.map((technology: TTechnology) => (
              <motion.div
                key={technology.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4 },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <SkillCard data={technology} />
              </motion.div>
            ))}

            {filteredTechnologies.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-300 text-lg">
                  No skills found in this category.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Technology;
