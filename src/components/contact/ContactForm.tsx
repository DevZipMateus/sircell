
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

interface ContactFormProps {
  setRef: (el: HTMLFormElement | null) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ setRef }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Sucesso",
        description: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setLoading(false);
    }, 1500);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-sm border border-sircell-lightgray opacity-0"
      ref={setRef}
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="flex items-center text-sircell-black font-semibold mb-2 text-lg">
            <User className="w-5 h-5 mr-2 text-sircell-green" />
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-sircell-lightgray rounded-lg focus:outline-none focus:border-sircell-green focus:ring-2 focus:ring-sircell-green/20 transition-all duration-300"
            placeholder="Digite seu nome completo"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="flex items-center text-sircell-black font-semibold mb-2 text-lg">
            <Mail className="w-5 h-5 mr-2 text-sircell-green" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-sircell-lightgray rounded-lg focus:outline-none focus:border-sircell-green focus:ring-2 focus:ring-sircell-green/20 transition-all duration-300"
            placeholder="Digite seu email"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="flex items-center text-sircell-black font-semibold mb-2 text-lg">
            <Phone className="w-5 h-5 mr-2 text-sircell-green" />
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-sircell-lightgray rounded-lg focus:outline-none focus:border-sircell-green focus:ring-2 focus:ring-sircell-green/20 transition-all duration-300"
            placeholder="Digite seu telefone (opcional)"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="flex items-center text-sircell-black font-semibold mb-2 text-lg">
            <MessageSquare className="w-5 h-5 mr-2 text-sircell-green" />
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border-2 border-sircell-lightgray rounded-lg focus:outline-none focus:border-sircell-green focus:ring-2 focus:ring-sircell-green/20 resize-none transition-all duration-300"
            placeholder="Descreva como podemos ajudá-lo..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={cn(
            "w-full flex items-center justify-center bg-sircell-green text-white rounded-lg py-4 px-6 font-semibold text-lg transition-all duration-300 shadow-lg",
            loading 
              ? "opacity-70 cursor-not-allowed" 
              : "hover:bg-sircell-darkgreen hover:shadow-xl hover:scale-105"
          )}
        >
          {loading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              <span>Enviando...</span>
            </div>
          ) : (
            <>
              <span>Enviar Mensagem</span>
              <Send className="ml-3 h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
