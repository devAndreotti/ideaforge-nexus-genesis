
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
      color: "text-creative-red-400"
    },
    {
      icon: Users,
      title: "Personagens",
      description: "Protagonista e personagens secundários com motivações e conflitos dinâmicos",
      color: "text-creative-ruby"
    },
    {
      icon: Cog,
      title: "Mecânicas e Progressão",
      description: "Sistemas modulares, árvore de habilidades e mecânicas balanceadas",
      color: "text-creative-fire"
    },
    {
      icon: Palette,
      title: "Estética e Interface",
      description: "Estilo visual, trilha sonora e design de interface recomendados",
      color: "text-creative-crimson"
    },
    {
      icon: TrendingUp,
      title: "Análise de Viabilidade",
      description: "Avaliação de complexidade, gargalos e versões simplificadas para protótipos",
      color: "text-creative-red-500"
    },
    {
      icon: Lightbulb,
      title: "Checklist de Produção",
      description: "Tarefas organizadas por categoria com possibilidade de exportação",
      color: "text-creative-red-600"
    }
  ];

  const deliverables = [
    {
      icon: FileText,
      title: "documentacao.txt",
      description: "Visão geral, mapa mental e estrutura narrativa completa",
      gradient: "from-creative-red-500 to-creative-ruby"
    },
    {
      icon: Image,
      title: "Prompts para IA de Imagem",
      description: "Compatível com Midjourney, Leonardo.ai e DALL-E para personagens e ambientes",
      gradient: "from-creative-ruby to-creative-fire"
    },
    {
      icon: Code,
      title: "Prompts Técnicos",
      description: "Estruturados para GPT, Gemini, Manus IA com foco em gameplay e mecânicas",
      gradient: "from-creative-fire to-creative-crimson"
    },
    {
      icon: Folder,
      title: "Estrutura de Pastas",
      description: "Modelo otimizado para Unity/Godot com organização profissional",
      gradient: "from-creative-crimson to-creative-red-600"
    },
    {
      icon: Megaphone,
      title: "Pitch Comercial",
      description: "Texto para investidores, redes sociais e roteiro para vídeo-pitch VEO 3",
      gradient: "from-creative-red-600 to-creative-red-500"
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
          <p className="text-xl text-creative-red-200 max-w-3xl mx-auto">
            Nossa inteligência artificial organiza suas informações e gera um sistema completo de criação de jogos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card group transition-all duration-500 ease-out hover:scale-105 hover:bg-white/10 hover:shadow-2xl hover:shadow-creative-red-500/25 border-white/10 hover:border-creative-red-500/30">
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-creative-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:animate-float group-hover:drop-shadow-lg relative z-10`} />
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-creative-red-100 transition-colors duration-300 relative z-10">{feature.title}</h3>
                <p className="text-creative-red-200 text-sm group-hover:text-creative-red-100 transition-colors duration-300 relative z-10">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Deliverables Section */}
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Entregas Geradas
          </h2>
          <p className="text-xl text-creative-red-200 max-w-3xl mx-auto">
            Arquivos prontos para uso imediato em seu projeto de desenvolvimento
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {deliverables.map((item, index) => (
            <Card key={index} className="glass-card group overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:bg-white/10 hover:shadow-2xl hover:shadow-creative-red-500/20 border-white/10 hover:border-creative-red-500/40">
              <div className={`h-1 bg-gradient-to-r ${item.gradient} transition-all duration-500 group-hover:h-2`}></div>
              <CardHeader className="pb-2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-creative-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <CardTitle className="flex items-center gap-3 text-left relative z-10">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} bg-opacity-20 transition-all duration-500 group-hover:bg-opacity-30 group-hover:scale-110 group-hover:shadow-lg`}>
                    <item.icon className="w-6 h-6 text-white transition-all duration-500 group-hover:drop-shadow-lg" />
                  </div>
                  <span className="text-white group-hover:text-creative-red-100 transition-colors duration-300">
                    {item.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <p className="text-creative-red-200 text-left group-hover:text-creative-red-100 transition-colors duration-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6">
        <Card className="glass-card max-w-2xl mx-auto overflow-hidden group transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:shadow-2xl hover:shadow-creative-red-500/30">
          <div className="h-1 bg-gradient-to-r from-creative-red-500 via-creative-ruby to-creative-fire transition-all duration-500 group-hover:h-2"></div>
          <CardContent className="p-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-creative-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="flex items-center justify-center gap-3 mb-4 relative z-10">
              <Zap className="w-8 h-8 text-creative-red-500 animate-pulse-red group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white group-hover:text-creative-red-100 transition-colors duration-300">Pronto para Começar?</h3>
              <Sparkles className="w-8 h-8 text-creative-red-500 animate-float group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-creative-red-200 mb-6 group-hover:text-creative-red-100 transition-colors duration-300 relative z-10">
              Transforme sua ideia vaga em um projeto estruturado e pronto para desenvolvimento em minutos
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-creative-red-300 group-hover:text-creative-red-200 transition-colors duration-300 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-creative-red-500 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                <span>Rápido</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-creative-red-500 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                <span>Completo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-creative-red-500 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                <span>Profissional</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeaturesShowcase;
