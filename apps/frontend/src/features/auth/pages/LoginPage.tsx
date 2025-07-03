import { motion } from "framer-motion";
import LoginForm from "@/components/LoginForm";
import { RotatedTitle } from "@/components/RotatedTitle";
import agroImage from "@/assets/agro.jpg";

export function LoginPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
      className="flex w-screen h-screen overflow-hidden"
    >
      <div className="relative w-1/2 h-full">
        <img
          src={agroImage}
          alt="Imagem agro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <RotatedTitle className="z-10 whitespace-nowrap text-9xl" />
      </div>
      <div className="w-1/2 flex items-center justify-center bg-[#f0f4e9] h-full">
        <LoginForm />
      </div>
    </motion.div>
  );
}
