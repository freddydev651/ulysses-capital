"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuSection {
  title: string;
  items: { title: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = React.useState<string | null>(null);
  const toggle = (t: string) => setExpanded((e) => (e === t ? null : t));

  const menuSections: MenuSection[] = [
    {
      title: "The Firm",
      items: [
        { title: "About Us", href: "/about" },
        { title: "Leadership", href: "/leadership" },
        { title: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Strategies",
      items: [
        { title: "Equities", href: "/strategies/equities" },
        { title: "Fixed Income", href: "/strategies/fixed-income" },
        { title: "Real Estate", href: "/strategies/real-estate" },
      ],
    },
    {
      title: "Portfolio",
      items: [
        { title: "Case Studies", href: "/portfolio/case-studies" },
        { title: "Track Record", href: "/portfolio/track-record" },
        { title: "Testimonials", href: "/portfolio/testimonials" },
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* slide-in menu */}
          <motion.div
            className="
              fixed top-0 right-0 h-full w-full sm:w-80
              bg-background border-l border-border
              z-50 overflow-y-auto
            "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-foreground">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-foreground"
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <nav className="space-y-6">
                {menuSections.map((sec) => (
                  <div key={sec.title} className="border-b border-border pb-4">
                    <button
                      onClick={() => toggle(sec.title)}
                      className="
                        flex justify-between items-center w-full
                        py-2 text-lg font-medium text-foreground
                      "
                    >
                      {sec.title}
                      <motion.div
                        animate={{ rotate: expanded === sec.title ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {expanded === sec.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="pl-4 pt-2 space-y-2">
                            {sec.items.map((item) => (
                              <motion.li
                                key={item.title}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Link
                                  href={item.href}
                                  className="
                                    block py-2 text-lg font-medium
                                    text-foreground hover:text-primary
                                    transition-colors
                                  "
                                  onClick={onClose}
                                >
                                  {item.title}
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="
                      block py-2 text-lg font-medium
                      text-foreground hover:text-primary
                      transition-colors
                    "
                    onClick={onClose}
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
