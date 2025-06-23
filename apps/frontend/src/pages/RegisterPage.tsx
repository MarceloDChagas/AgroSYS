import { motion } from "framer-motion";
import RegisterForm from "../components/RegisterForm";
import { RotatedTitle } from "../components/RotatedTitle";
import agroImage from "../assets/agro.jpg";
import { routes } from "../routes/routes";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import type { RegisterFormData } from "@/types/forms/register-form-data";

export function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = async (
    data: Omit<RegisterFormData, "confirmPassword">
  ) => {
    try {
      console.log("Enviando para registro:", data); // ADICIONE ISSO

      const response = await axios.post(routes.register, data);
      console.log("Usuário registrado:", response.data);
      navigate("/login"); // redireciona para login após sucesso
    } catch (error) {
      console.error("Erro no registro:", error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
      className="flex w-screen h-screen overflow-hidden"
    >
      {/* Lado esquerdo: Formulário */}
      <div className="w-1/2 flex items-center justify-center bg-[#f0f4e9] h-full">
        <RegisterForm onSubmit={handleRegister} />
      </div>

      {/* Lado direito: Imagem com texto rotacionado */}
      <div
        className="relative w-1/2 h-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${agroImage})`,
        }}
      >
        <RotatedTitle position="left" />
      </div>
    </motion.div>
  );
}

export default RegisterPage;
