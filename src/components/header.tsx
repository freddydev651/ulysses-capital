"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { DropdownMenu } from "@/components/dropdown-menu";
import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "./ui/button";

const firmItems = [
  { title: "About Us", href: "/about" },
  { title: "Leadership", href: "/leadership" },
  { title: "Careers", href: "/careers" },
];

const strategiesItems = [
  { title: "Equities", href: "/strategies/equities" },
  { title: "Fixed Income", href: "/strategies/fixed-income" },
  { title: "Real Estate", href: "/strategies/real-estate" },
];

const portfolioItems = [
  { title: "Case Studies", href: "/portfolio/case-studies" },
  { title: "Track Record", href: "/portfolio/track-record" },
  { title: "Testimonials", href: "/portfolio/testimonials" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="
          w-full
          bg-background border-b border-border
          px-4 sm:px-6 py-4
          sticky top-0 z-40
        "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-serif tracking-tight text-primary"
          >
            Ulysses Capital
          </Link>

          <nav className="hidden xl:flex items-center space-x-4">
            <DropdownMenu title="The Firm" items={firmItems} />
            <DropdownMenu title="Strategies" items={strategiesItems} />
            <DropdownMenu title="Portfolio" items={portfolioItems} />
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/contact"
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </motion.div>
          </nav>

          <div className="flex items-center xl:hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
