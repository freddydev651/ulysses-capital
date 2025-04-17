"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownMenuProps {
  title: string;
  items: { title: string; href: string }[];
}

export function DropdownMenu({ title, items }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  // initialize ref with null to satisfy TypeScript
  const closeTimeout = React.useRef<number | null>(null);

  const open = () => {
    if (closeTimeout.current !== null) {
      window.clearTimeout(closeTimeout.current);
    }
    setIsOpen(true);
  };

  const close = () => {
    // delay closing to give cursor time
    closeTimeout.current = window.setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={open} onMouseLeave={close}>
      <motion.button
        className="
          flex items-center gap-1 px-3 py-2 text-sm font-medium
          text-foreground hover:text-primary transition-colors
        "
        onClick={() => setIsOpen((o) => !o)}
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {title}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="
              absolute left-0 top-full z-10 mt-1 w-48
              rounded-md bg-popover border border-border
              shadow-lg overflow-hidden
            "
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-1">
              {items.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="
                      block px-4 py-2 text-sm text-foreground
                      hover:bg-muted transition-colors
                    "
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
