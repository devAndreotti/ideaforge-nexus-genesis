
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Zap, Target, Rocket } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-creative-red-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-creative-red-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-creative-red-600 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-creative-ruby rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/2 left-8 w-1 h-1 bg-creative-fire rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-1/3 right-12 w-2 h-2 bg-creative-crimson rounded-full animate-pulse opacity-60"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-gradient animate-fade-in">
              Brainstorm
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white animate-fade-in" style={{animationDelay: '0.2s'}}>
              Criativo
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <Sparkles className="w-8 h-8 text-creative-red-500 animate-float" />
              <p className="text-xl md:text-2xl text-creative-red-200 font-medium animate-fade-in" style={{animationDelay: '0.4s'}}>
                Transforme ideias em projetos completos
              </p>
              <Zap className="w-8 h-8 text-creative-red-500 animate-pulse-red" />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Card className="glass-card hover-lift glow-red">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-creative-red-500 mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-bold text-white mb-2">Análise Inteligente</h3>
                <p className="text-creative-red-200">
                  IA processa suas ideias e gera documentação completa, mecânicas e narrativa estruturada
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift glow-red">
              <CardContent className="p-6 text-center">
                <Rocket className="w-12 h-12 text-creative-red-500 mx-auto mb-4 animate-float" style={{animationDelay: '0.5s'}} />
                <h3 className="text-xl font-bold text-white mb-2">Entrega Completa</h3>
                <p className="text-creative-red-200">
                  Receba prompts para IA, estrutura de código, documentação e pitch comercial prontos
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift glow-red">
              <CardContent className="p-6 text-center">
                <Sparkles className="w-12 h-12 text-creative-red-500 mx-auto mb-4 animate-pulse-red" />
                <h3 className="text-xl font-bold text-white mb-2">Criatividade Amplificada</h3>
                <p className="text-creative-red-200">
                  Expandimos suas referências e criamos elementos únicos para destacar seu projeto
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center gap-12 mt-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">5+</div>
              <div className="text-sm text-creative-red-300">Arquivos Gerados</div>
            </div>
            <div className="w-px h-12 bg-creative-red-500/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">100%</div>
              <div className="text-sm text-creative-red-300">Pronto para Uso</div>
            </div>
            <div className="w-px h-12 bg-creative-red-500/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">∞</div>
              <div className="text-sm text-creative-red-300">Possibilidades</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
