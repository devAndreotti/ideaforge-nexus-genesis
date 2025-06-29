
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  Image, 
  Code, 
  Folder, 
  Megaphone, 
  Brain, 
  Palette, 
  Cog,
  Users,
  TrendingUp,
  Lightbulb,
  Zap,
  Sparkles
} from 'lucide-react';

const FeaturesShowcase = () => {
  const features = [
    {
      icon: Brain,
      title: "Lore e Mundo",
      description: "Detalhamento completo da ambientação, temas centrais e sistema narrativo",
      color: "text-red-200",
      category: "Criação"
    },
    {
      icon: Users,
      title: "Personagens",
      description: "Protagonista e personagens secundários com motivações e conflitos dinâmicos",
      color: "text-red-100",
      category: "Narrativa"
    },
    {
      icon: Cog,
      title: "Mecânicas e Progressão",
      description: "Sistemas modulares, árvore de habilidades e mecânicas balanceadas",
      color: "text-red-200",
      category: "Gameplay"
    },
    {
      icon: Palette,
      title: "Estética e Interface",
      description: "Estilo visual, trilha sonora e design de interface recomendados",
      color: "text-red-100",
      category: "Design"
    },
    {
      icon: TrendingUp,
      title: "Análise de Viabilidade",
      description: "Avaliação de complexidade, gargalos e versões simplificadas para protótipos",
      color: "text-red-200",
      category: "Estratégia"
    },
    {
      icon: Lightbulb,
      title: "Checklist de Produção",
      description: "Tarefas organizadas por categoria com possibilidade de exportação",
      color: "text-red-100",
      category: "Produção"
    }
  ];

  const deliverables = [
    {
      icon: FileText,
      title: "documentacao.txt",
      description: "Visão geral, mapa mental e estrutura narrativa completa",
      gradient: "from-white/20 to-white/10",
      time: "2 min"
    },
    {
      icon: Image,
      title: "Prompts para IA de Imagem",
      description: "Compatível com Midjourney, Leonardo.ai e DALL-E para personagens e ambientes",
      gradient: "from-white/20 to-white/10",
      time: "3 min"
    },
    {
      icon: Code,
      title: "Prompts Técnicos",
      description: "Estruturados para GPT, Gemini, Manus IA com foco em gameplay e mecânicas",
      gradient: "from-white/20 to-white/10",
      time: "4 min"
    },
    {
      icon: Folder,
      title: "Estrutura de Pastas",
      description: "Modelo otimizado para Unity/Godot com organização profissional",
      gradient: "from-white/20 to-white/10",
      time: "1 min"
    },
    {
      icon: Megaphone,
      title: "Pitch Comercial",
      description: "Texto para investidores, redes sociais e roteiro para vídeo-pitch VEO 3",
      gradient: "from-white/20 to-white/10",
      time: "5 min"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      {/* AI Processing Section */}
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Processamento da IA
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
            Nossa inteligência artificial organiza suas informações e gera um sistema completo de criação de jogos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="news-card group p-6 relative">
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                  {feature.category}
                </span>
              </div>
              
              <div className="flex items-start space-x-4 mt-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                    <feature.icon className={`w-6 h-6 ${feature.color} group-hover:text-white transition-all duration-300`} />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/95 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/80 group-hover:text-white/90 transition-colors duration-300 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables Section */}
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Entregas Geradas
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
            Arquivos prontos para uso imediato em seu projeto de desenvolvimento
          </p>
        </div>

        <div className="grid gap-4 max-w-5xl mx-auto">
          {deliverables.map((item, index) => (
            <div key={index} className="glass-card-premium group transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4 flex-1">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} border border-white/20 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110 backdrop-blur-sm`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-bold text-white group-hover:text-white/95 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 group-hover:text-white/90 transition-colors duration-300 mt-1 font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-sm text-white/70">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
                    <span className="font-medium">{item.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6">
        <div className="glass-card-premium max-w-3xl mx-auto group transition-all duration-500 hover:scale-105">
          <div className="p-8 relative">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-white/90 animate-pulse-red group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-3xl font-bold text-white group-hover:text-white/95 transition-colors duration-300">
                Pronto para Começar?
              </h3>
              <Sparkles className="w-8 h-8 text-white/90 animate-float group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            <p className="text-lg text-white/80 mb-8 group-hover:text-white/90 transition-colors duration-300 font-medium">
              Transforme sua ideia vaga em um projeto estruturado e pronto para desenvolvimento em minutos
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm">
              {['Rápido', 'Completo', 'Profissional'].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-white/70 group-hover:text-white/85 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesShowcase;
