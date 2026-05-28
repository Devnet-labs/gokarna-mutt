"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Bootloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const finish = () => setTimeout(() => setShow(false), 500);
    if (document.readyState === "complete") {
      finish();
      return;
    }
    window.addEventListener("load", finish, { once: true });
    const safety = setTimeout(() => setShow(false), 3500);
    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(safety);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="bootloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--color-maroon-deep)]"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: [1, 1.06, 1], opacity: 1 }}
            transition={{
              scale: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8 }
            }}
          >
            <Image
              src="/images/seal.png"
              alt="Shree Samsthan Gokarn Partagali Jeevottam Math"
              width={220}
              height={220}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
