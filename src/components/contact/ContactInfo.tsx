
import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

interface ContactInfoProps {
  setRef: (el: HTMLDivElement | null) => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ setRef }) => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      details: "+55 (54) 98101-4238",
      href: "tel:+5554981014238"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "contato@sircell.com.br",
      href: "mailto:contato@sircell.com.br"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      details: "+55 (54) 98101-4238",
      href: "https://wa.me/5554981014238?text=Olá! Gostaria de mais informações sobre os serviços da Sircell Assistência Técnica."
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Endereço",
      details: "Marechal Floriano, 1001 - RS",
      href: "https://maps.google.com"
    }
  ];

  return (
    <div 
      className="space-y-8 opacity-0 bg-white p-8 rounded-lg shadow-sm border border-sircell-lightgray"
      ref={setRef}
    >
      <div className="text-center mb-6">
        <p className="text-sircell-black font-medium text-lg">
          Entre em contato conosco através dos seguintes canais de comunicação:
        </p>
      </div>
      
      <div>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <a 
              href={info.href}
              key={index}
              className="flex items-start p-4 rounded-lg bg-sircell-lightgray/30 hover:bg-sircell-lightgreen/20 hover:text-sircell-darkgreen transition-all duration-300 group"
              target={info.icon.type === MapPin ? "_blank" : undefined}
              rel={info.icon.type === MapPin ? "noopener noreferrer" : undefined}
            >
              <div className="text-sircell-green group-hover:text-sircell-darkgreen transition-colors duration-300 mt-1 mr-4 p-2 bg-white rounded-full shadow-sm">
                {info.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sircell-black text-lg mb-1">{info.title}</h4>
                <p className="text-sircell-gray group-hover:text-sircell-black transition-colors duration-300">{info.details}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <div className="border-t border-sircell-lightgray pt-6">
        <div className="flex items-start p-4 rounded-lg bg-sircell-green/5">
          <div className="text-sircell-green mr-4 p-2 bg-white rounded-full shadow-sm">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-sircell-black font-semibold text-xl mb-2">
              Horário de Atendimento
            </h3>
            <div className="space-y-1 text-sircell-gray">
              <p className="font-medium">Segunda a Sexta: 9h às 18h</p>
              <p className="font-medium">Sábados: 9h às 13h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
