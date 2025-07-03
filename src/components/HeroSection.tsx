import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Zap, Target, Rocket } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating circles with glow */}
        <div className="floating-element floating-circle-glow w-40 h-40 top-16 left-16 animate-float-glow" style={{animationDelay: '0s'}}></div>
        <div className="floating-element floating-circle-glow w-32 h-32 top-1/3 right-20 animate-float-glow" style={{animationDelay: '2s'}}></div>
        <div className="floating-element floating-circle-glow w-24 h-24 bottom-1/4 left-1/4 animate-float-glow" style={{animationDelay: '4s'}}></div>
        <div className="floating-element floating-circle-glow w-28 h-28 bottom-20 right-16 animate-float-glow" style={{animationDelay: '6s'}}></div>
        
        {/* Regular floating circles */}
        <div className="floating-element floating-circle w-32 h-32 top-20 left-20 animate-float-slow" style={{animationDelay: '0s'}}></div>
        <div className="floating-element floating-circle w-24 h-24 top-40 right-32 animate-float-slow" style={{animationDelay: '2s'}}></div>
        <div className="floating-element floating-circle w-16 h-16 bottom-32 left-16 animate-float-slow" style={{animationDelay: '4s'}}></div>
        <div className="floating-element floating-circle w-20 h-20 bottom-20 right-20 animate-float-slow" style={{animationDelay: '6s'}}></div>
        
        {/* Floating squares */}
        <div className="floating-element floating-square w-12 h-12 top-1/3 left-8 animate-float-medium" style={{animationDelay: '1s'}}></div>
        <div className="floating-element floating-square w-16 h-16 top-1/2 right-12 animate-float-medium" style={{animationDelay: '3s'}}></div>
        <div className="floating-element floating-square w-8 h-8 bottom-1/3 left-1/4 animate-float-medium" style={{animationDelay: '5s'}}></div>
        <div className="floating-element floating-square w-14 h-14 top-1/4 right-1/3 animate-float-medium" style={{animationDelay: '7s'}}></div>
        
        {/* Floating diamonds */}
        <div className="floating-element floating-diamond top-1/5 left-1/3 animate-float-diamond" style={{animationDelay: '1.5s'}}></div>
        <div className="floating-element floating-diamond bottom-1/3 right-1/4 animate-float-diamond" style={{animationDelay: '3.5s'}}></div>
        <div className="floating-element floating-diamond top-2/3 left-1/5 animate-float-diamond" style={{animationDelay: '5.5s'}}></div>
        
        {/* Floating triangles */}
        <div className="floating-element top-1/4 right-1/4 animate-float-fast" style={{animationDelay: '0.5s'}}>
          <div className="floating-triangle"></div>
        </div>
        <div className="floating-element bottom-1/4 left-1/3 animate-float-fast" style={{animationDelay: '2.5s'}}>
          <div className="floating-triangle"></div>
        </div>
        <div className="floating-element top-1/2 left-1/5 animate-float-fast" style={{animationDelay: '4.5s'}}>
          <div className="floating-triangle"></div>
        </div>
        
        {/* Drifting elements with glow - more of them */}
        <div className="absolute top-16 right-16 w-3 h-3 bg-red-400 rounded-full opacity-70 animate-drift shadow-lg shadow-red-400/50" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-24 w-4 h-4 bg-red-300 rounded-full opacity-60 animate-drift shadow-lg shadow-red-300/40" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white rounded-full opacity-80 animate-drift shadow-lg shadow-white/60" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-red-500 rounded-full opacity-65 animate-drift shadow-lg shadow-red-500/50" style={{animationDelay: '7s'}}></div>
        <div className="absolute bottom-1/2 right-1/5 w-2 h-2 bg-red-200 rounded-full opacity-75 animate-drift shadow-lg shadow-red-200/40" style={{animationDelay: '9s'}}></div>
        
        {/* Static pulsing dots - enhanced */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-red-500 rounded-full animate-pulse opacity-60 shadow-lg shadow-red-500/60"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-red-400 rounded-full animate-pulse opacity-40 shadow-md shadow-red-400/50"></div>
        <div className="absolute bottom-32 left-16 w-4 h-4 bg-red-600 rounded-full animate-pulse opacity-80 shadow-lg shadow-red-600/70"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-red-500 rounded-full animate-pulse opacity-50 shadow-lg shadow-red-500/50"></div>
        <div className="absolute top-1/2 left-8 w-2 h-2 bg-white rounded-full animate-pulse opacity-70 shadow-md shadow-white/60"></div>
        <div className="absolute top-1/3 right-12 w-3 h-3 bg-red-400 rounded-full animate-pulse opacity-60 shadow-lg shadow-red-400/50"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-red-300 rounded-full animate-pulse opacity-55 shadow-md shadow-red-300/40"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white rounded-full animate-pulse opacity-65 shadow-lg shadow-white/50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
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
              <Sparkles className="w-8 h-8 text-red-400 animate-float" />
              <p className="text-xl md:text-2xl text-red-200 font-medium animate-fade-in" style={{animationDelay: '0.4s'}}>
                Transforme ideias em projetos completos
              </p>
              <Zap className="w-8 h-8 text-red-400 animate-pulse-red" />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Card className="glass-card hover-lift glow-red">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-red-400 mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-bold text-white mb-2">Análise Inteligente</h3>
                <p className="text-red-200">
                  IA processa suas ideias e gera documentação completa, mecânicas e narrativa estruturada
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift glow-red">
              <CardContent className="p-6 text-center">
                <Rocket className="w-12 h-12 text-red-400 mx-auto mb-4 animate-float" style={{animationDelay: '0.5s'}} />
                <h3 className="text-xl font-bold text-white mb-2">Entrega Completa</h3>
                <p className="text-red-200">
                  Receba prompts para IA, estrutura de código, documentação e pitch comercial prontos
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift glow-red">
              <CardContent className="p-6 text-center">
                <Sparkles className="w-12 h-12 text-red-400 mx-auto mb-4 animate-pulse-red" />
                <h3 className="text-xl font-bold text-white mb-2">Criatividade Amplificada</h3>
                <p className="text-red-200">
                  Expandimos suas referências e criamos elementos únicos para destacar seu projeto
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center gap-12 mt-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">5+</div>
              <div className="text-sm text-red-300">Arquivos Gerados</div>
            </div>
            <div className="w-px h-12 bg-red-500/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">100%</div>
              <div className="text-sm text-red-300">Pronto para Uso</div>
            </div>
            <div className="w-px h-12 bg-red-500/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">∞</div>
              <div className="text-sm text-red-300">Possibilidades</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
