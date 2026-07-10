"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { CursorGlow } from "./ui/CursorGlow";
import { HeroPhoto } from "./HeroPhoto";
import { contact } from "@/lib/data";

const NAME_WORDS = ["Yashaswini", "Kulshrestha"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pt-28 pb-16"
    >
      <CursorGlow />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-hand text-2xl sm:text-3xl text-accent-warm mb-3"
          >
            hey, I build things that don&apos;t break
          </motion.p>

          <h1 className="font-display text-4xl sm:text-6xl font-medium tracking-tight text-text-primary">
            {NAME_WORDS.map((word, i) => (
              <span key={word} className="inline-block overflow-hidden align-bottom mr-3">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 max-w-xl text-lg text-text-muted"
          >
            Backend engineer building agentic AI systems where the model
            proposes and deterministic rules decide.{" "}
            <span className="text-text-primary">
              Spring Boot · LangGraph · LLM Systems.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent-primary px-6 py-3 text-sm font-medium text-bg-base transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={contact.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border-soft px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5"
            >
              <Download className="h-4 w-4" />
              Download Résumé
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:justify-self-end"
        >
          <HeroPhoto />
        </motion.div>
      </div>
    </section>
  );
}
