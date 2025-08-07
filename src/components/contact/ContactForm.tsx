
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Send } from 'lucide-react';
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
      className="bg-white p-8 rounded-lg shadow-sm opacity-0"
      ref={setRef}
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-accounting-navy font-medium mb-1">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-accounting-lightgray rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue/20"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-accounting-navy font-medium mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-accounting-lightgray rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue/20"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-accounting-navy font-medium mb-1">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-accounting-lightgray rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue/20"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-accounting-navy font-medium mb-1">
            Mensagem *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-accounting-lightgray rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue/20 resize-none"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={cn(
            "w-full flex items-center justify-center bg-accounting-navy text-white rounded-md py-3 px-6 font-medium transition-colors duration-300",
            loading ? "opacity-70 cursor-not-allowed" : "hover:bg-accounting-blue"
          )}
        >
          {loading ? (
            <span>Enviando...</span>
          ) : (
            <>
              <span>Enviar Mensagem</span>
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
