
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Lightbulb, Sparkles, Download, FileText, Code, Folder, Megaphone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  title: string;
  genre: string;
  references: string;
  story: string;
  perspective: string;
  elements: string;
  purpose: string;
}

const CreativeBrainstormForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    genre: '',
    references: '',
    story: '',
    perspective: '',
    elements: '',
    purpose: ''
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateCreativePackage = async () => {
    if (!formData.title || !formData.genre || !formData.story) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha pelo menos o título, gênero e história base.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    // Simulate AI processing
    setTimeout(() => {
      toast({
        title: "Pacote Criativo Gerado! 🎉",
        description: "Seus arquivos estão prontos para download.",
      });
      setIsGenerating(false);
    }, 3000);
  };

  const downloadFile = (filename: string, content: string) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const generateDocumentation = () => {
    const doc = `
DOCUMENTAÇÃO CRIATIVA - ${formData.title}

═══════════════════════════════════════
📋 VISÃO GERAL DO PROJETO
═══════════════════════════════════════

Título: ${formData.title}
Gênero: ${formData.genre}
Perspectiva: ${formData.perspective}
Finalidade: ${formData.purpose}

═══════════════════════════════════════
🌟 CONCEITO CENTRAL
═══════════════════════════════════════

${formData.story}

═══════════════════════════════════════
🎭 REFERÊNCIAS CRIATIVAS
═══════════════════════════════════════

${formData.references}

═══════════════════════════════════════
⚙️ ELEMENTOS OBRIGATÓRIOS
═══════════════════════════════════════

${formData.elements}

═══════════════════════════════════════
🏗️ ESTRUTURA SUGERIDA
═══════════════════════════════════════

LORE E MUNDO:
• Ambientação detalhada baseada no gênero ${formData.genre}
• Temas centrais: conflito, mistério, evolução
• Sistema de progressão narrativa

PERSONAGENS:
• Protagonista com motivações claras
• Ensemble de personagens secundários
• Relações e conflitos dinâmicos

MECÂNICAS:
• Sistema de progressão adaptado à perspectiva ${formData.perspective}
• Elementos integrados: ${formData.elements}
• Balanceamento e recompensas

ESTÉTICA:
• Estilo visual coerente com ${formData.genre}
• Interface intuitiva
• Feedback audiovisual impactante

═══════════════════════════════════════
📊 ANÁLISE DE VIABILIDADE
═══════════════════════════════════════

Complexidade: Média-Alta
Escopo recomendado: MVP com expansões planejadas
Gargalos identificados: Balanceamento de mecânicas complexas

═══════════════════════════════════════
✅ CHECKLIST DE PRODUÇÃO
═══════════════════════════════════════

ARTE:
□ Concept art dos personagens principais
□ Design de ambientes
□ UI/UX mockups
□ Animações base

CÓDIGO:
□ Arquitetura do projeto
□ Sistemas core
□ Mecânicas principais
□ Testes e otimização

NARRATIVA:
□ Roteiro principal
□ Diálogos
□ Sistema de escolhas
□ Múltiplos finais

TESTES:
□ Playtesting interno
□ Balanceamento
□ Bug fixes
□ Polimento final
    `;

    downloadFile('documentacao_criativa.txt', doc);
  };

  const generateImagePrompt = () => {
    const prompt = `
PROMPTS PARA IA DE IMAGEM - ${formData.title}

═══════════════════════════════════════
🎨 PERSONAGEM PRINCIPAL
═══════════════════════════════════════

"Character design, ${formData.genre} style, protagonist for ${formData.title}, ${formData.perspective} perspective, highly detailed, concept art style, dramatic lighting, cinematic composition, inspired by ${formData.references}, professional game art quality, 4K resolution"

═══════════════════════════════════════
🏞️ AMBIENTE PRINCIPAL
═══════════════════════════════════════

"Environment concept art, ${formData.genre} setting, atmospheric lighting, ${formData.perspective} viewpoint, inspired by ${formData.references}, detailed background for ${formData.title}, cinematic composition, high quality game environment, mood lighting, 4K resolution"

═══════════════════════════════════════
🎬 CENA-CHAVE
═══════════════════════════════════════

"Key scene illustration, ${formData.genre} aesthetic, story moment from: ${formData.story}, dramatic composition, ${formData.perspective} perspective, inspired by ${formData.references}, cinematic lighting, high detail, concept art style, 4K resolution"

═══════════════════════════════════════
🎨 VARIAÇÕES DE ESTILO
═══════════════════════════════════════

LEONARDO.AI: Adicionar "Leonardo Style" no início
MIDJOURNEY: Adicionar "--ar 16:9 --v 6" no final
DALL-E: Focar em descrições detalhadas e específicas

═══════════════════════════════════════
🎯 TAGS RECOMENDADAS
═══════════════════════════════════════

#${formData.genre.replace(' ', '')} #ConceptArt #GameDesign #${formData.title.replace(' ', '')} #DigitalArt #CharacterDesign #EnvironmentArt
    `;

    downloadFile('prompts_imagem.txt', prompt);
  };

  const generateCodePrompt = () => {
    const prompt = `
PROMPTS TÉCNICOS PARA IA DE CÓDIGO - ${formData.title}

═══════════════════════════════════════
🤖 PROMPT PARA GPT/GEMINI
═══════════════════════════════════════

"Crie um sistema de jogo ${formData.genre} em Unity C# com as seguintes especificações:

CONCEITO: ${formData.story}
PERSPECTIVA: ${formData.perspective}
ELEMENTOS: ${formData.elements}
FINALIDADE: ${formData.purpose}

Desenvolva:
1. Arquitetura modular do projeto
2. Sistema de controle de personagem para ${formData.perspective}
3. Mecânicas principais: ${formData.elements}
4. Sistema de progressão
5. Padrões de IA para inimigos
6. Sistema de save/load
7. Interface de usuário intuitiva

Forneça código limpo, comentado e seguindo boas práticas de C# e Unity."

═══════════════════════════════════════
🧠 PROMPT PARA GROK AI
═══════════════════════════════════════

"Desenvolva um jogo ${formData.genre} completo em Unity:

🎮 CONCEITO: ${formData.story}
📐 PERSPECTIVA: ${formData.perspective}  
⚙️ ELEMENTOS: ${formData.elements}
🎯 OBJETIVO: ${formData.purpose}

Referências: ${formData.references}

Crie uma arquitetura robusta incluindo:
- GameManager com padrão Singleton
- PlayerController otimizado para ${formData.perspective}
- Sistema de inventário escalável
- IA comportamental avançada
- Sistema de eventos desacoplado
- Gerenciamento de recursos eficiente
- UI responsiva e acessível

Utilize padrões como Observer, State Machine, Object Pooling.
Código deve ser modular, performático e bem documentado."

═══════════════════════════════════════
⚡ PROMPT PARA MANUS IA
═══════════════════════════════════════

"Projeto: ${formData.title}
Gênero: ${formData.genre}
Engine: Unity 3D
Linguagem: C#

Criar sistema completo incluindo:
- GameManager principal
- PlayerController (${formData.perspective})
- Sistema de inventário
- Mecânicas específicas: ${formData.elements}
- AI behavior trees
- Sistema de eventos
- UI responsiva

Estrutura modular e escalável."

═══════════════════════════════════════
🎮 ESPECIFICAÇÕES TÉCNICAS
═══════════════════════════════════════

PLATAFORMA: Multi-plataforma (PC, Mobile)
ENGINE: Unity 2022.3 LTS
LINGUAGEM: C#
PADRÕES: Observer, State Machine, Object Pooling
ARQUITETURA: MVC adaptado para jogos

═══════════════════════════════════════
📱 CONSIDERAÇÕES MOBILE
═══════════════════════════════════════

- Touch controls otimizados
- Performance para dispositivos de baixo custo
- UI adaptativa para diferentes resoluções
- Sistema de salvamento em nuvem (opcional)

═══════════════════════════════════════
🚀 PROMPT ESPECÍFICO GROK - AVANÇADO
═══════════════════════════════════════

"Grok, preciso de um sistema de jogo ${formData.genre} inovador:

LORE: ${formData.story}
MECÂNICAS: ${formData.elements}
VISÃO: ${formData.perspective}
META: ${formData.purpose}

Desenvolva:
1. Arquitetura hexagonal para jogos
2. Sistema de componentes ECS (Entity Component System)
3. Shader customizados para efeitos visuais
4. Algoritmos de IA procedural
5. Sistema de networking para multiplayer
6. Pipeline de assets automatizado
7. Testes unitários e integração

Foque em performance, escalabilidade e manutenibilidade.
Use C# 9+ features e Unity 2023+ APIs."
    `;

    downloadFile('prompts_codigo.txt', prompt);
  };

  const generateFolderStructure = () => {
    const structure = `
ESTRUTURA DE PASTAS - ${formData.title}

${formData.title}/
├── 📁 Assets/
│   ├── 📁 Scripts/
│   │   ├── 📁 Player/
│   │   │   ├── PlayerController.cs
│   │   │   ├── PlayerStats.cs
│   │   │   └── PlayerAnimations.cs
│   │   ├── 📁 Game/
│   │   │   ├── GameManager.cs
│   │   │   ├── SceneManager.cs
│   │   │   └── AudioManager.cs
│   │   ├── 📁 UI/
│   │   │   ├── MainMenu.cs
│   │   │   ├── HUD.cs
│   │   │   └── SettingsMenu.cs
│   │   ├── 📁 Mechanics/
│   │   │   ├── InventorySystem.cs
│   │   │   ├── CraftingSystem.cs
│   │   │   └── ProgressionSystem.cs
│   │   └── 📁 AI/
│   │       ├── EnemyAI.cs
│   │       ├── NPCDialogue.cs
│   │       └── BehaviorTrees.cs
│   ├── 📁 Prefabs/
│   │   ├── 📁 Characters/
│   │   ├── 📁 Environment/
│   │   ├── 📁 UI/
│   │   └── 📁 Effects/
│   ├── 📁 Scenes/
│   │   ├── MainMenu.unity
│   │   ├── GameplayScene.unity
│   │   └── LoadingScreen.unity
│   ├── 📁 Materials/
│   ├── 📁 Textures/
│   ├── 📁 Models/
│   ├── 📁 Audio/
│   │   ├── 📁 Music/
│   │   ├── 📁 SFX/
│   │   └── 📁 Voice/
│   └── 📁 Animations/
├── 📁 Documentation/
│   ├── README.md
│   ├── GameDesignDocument.md
│   ├── TechnicalSpecs.md
│   └── ArtStyle.md
└── 📁 Build/
    ├── 📁 PC/
    ├── 📁 Android/
    └── 📁 iOS/

═══════════════════════════════════════
📋 README.md TEMPLATE
═══════════════════════════════════════

# ${formData.title}

## Descrição
${formData.story}

## Gênero
${formData.genre}

## Perspectiva
${formData.perspective}

## Elementos Principais
${formData.elements}

## Finalidade
${formData.purpose}

## Como Executar
1. Abra o projeto no Unity 2022.3 ou superior
2. Carregue a cena "MainMenu"
3. Pressione Play

## Estrutura do Código
- **Player/**: Scripts relacionados ao jogador
- **Game/**: Gerenciadores principais do jogo
- **UI/**: Interface de usuário
- **Mechanics/**: Sistemas de gameplay
- **AI/**: Inteligência artificial

## Referências
${formData.references}

## Status do Projeto
Em desenvolvimento - MVP

---
Gerado pelo Brainstorm Criativo
    `;

    downloadFile('estrutura_projeto.txt', structure);
  };

  const generatePitch = () => {
    const pitch = `
PITCH COMERCIAL - ${formData.title}

═══════════════════════════════════════
🎯 ELEVATOR PITCH (30 segundos)
═══════════════════════════════════════

"${formData.title} é um ${formData.genre} inovador que leva os jogadores a uma jornada única: ${formData.story}. Com perspectiva ${formData.perspective} e elementos únicos como ${formData.elements}, criamos uma experiência que combina o melhor de ${formData.references} com mecânicas originais."

═══════════════════════════════════════
🌟 PROPOSTA DE VALOR
═══════════════════════════════════════

ÚNICO: Combinação inédita de ${formData.genre} com ${formData.perspective}
IMERSIVO: História envolvente que prende o jogador do início ao fim
INOVADOR: Mecânicas ${formData.elements} nunca vistas antes
ESCALÁVEL: Projeto planejado para expansões e monetização sustentável

═══════════════════════════════════════
📊 MERCADO E OPORTUNIDADE
═══════════════════════════════════════

PÚBLICO-ALVO: Gamers de ${formData.genre} e entusiastas de narrativa
PLATAFORMAS: Multi-plataforma (PC, Console, Mobile)
MONETIZAÇÃO: ${formData.purpose}
DIFERENCIAL: Primeira experiência a combinar [elementos únicos do seu jogo]

═══════════════════════════════════════
🎬 ROTEIRO PARA VÍDEO-PITCH (VEO 3)
═══════════════════════════════════════

[CENA 1 - Hook] (0-5s)
"Imagine um mundo onde ${formData.story.substring(0, 50)}..."
*Mostrar concept art do ambiente principal*

[CENA 2 - Problema] (5-15s)
"Jogadores de ${formData.genre} estão cansados de experiências repetitivas..."
*Mostrar comparações com jogos similares*

[CENA 3 - Solução] (15-35s)
"${formData.title} oferece ${formData.elements} em uma perspectiva ${formData.perspective} única..."
*Gameplay mockup ou storyboard*

[CENA 4 - Demonstração] (35-50s)
"Com inspiração em ${formData.references}, criamos uma experiência que..."
*Mostrar features principais*

[CENA 5 - Call to Action] (50-60s)
"Participe da revolução do ${formData.genre}. ${formData.title} - Em breve."
*Logo e informações de contato*

═══════════════════════════════════════
📱 POSTS PARA REDES SOCIAIS
═══════════════════════════════════════

LINKEDIN:
"Desenvolvendo ${formData.title}, um ${formData.genre} que redefine os padrões do gênero. Com elementos inovadores como ${formData.elements} e narrativa inspirada em ${formData.references}, estamos criando uma experiência única para ${formData.purpose}. #GameDev #Innovation #${formData.genre.replace(' ', '')}"

TWITTER:
"🎮 ${formData.title} em desenvolvimento!
⚡ ${formData.genre} + ${formData.perspective}
🔥 ${formData.elements}
🎯 ${formData.purpose}
#IndieGame #GameDev"

INSTAGRAM:
"Behind the scenes de ${formData.title} ✨
Um ${formData.genre} que combina o melhor de ${formData.references} com inovação total.
.
.
.
#gamedev #indiegame #${formData.genre.replace(' ', '').toLowerCase()} #creative"
    `;

    downloadFile('pitch_comercial.txt', pitch);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Card className="glass-card hover-lift border-creative-red-500/20">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-creative-red-500 animate-pulse-red" />
            <CardTitle className="text-3xl font-bold text-gradient">
              Brainstorm Criativo
            </CardTitle>
            <Sparkles className="w-8 h-8 text-creative-red-500 animate-float" />
          </div>
          <CardDescription className="text-lg text-muted-foreground">
            Transforme sua ideia em um pacote criativo completo, pronto para desenvolvimento
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="glass-card hover-lift">
          <CardHeader>
            <CardTitle className="text-creative-red-400">Conceito Inicial</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Título ou Conceito *</Label>
              <Input
                id="title"
                placeholder="Ex: Shadowbound Chronicles"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="bg-background/50 border-creative-red-500/30 focus:border-creative-red-500"
              />
            </div>

            <div>
              <Label htmlFor="genre">Gênero e Ambientação *</Label>
              <Select onValueChange={(value) => handleInputChange('genre', value)}>
                <SelectTrigger className="bg-background/50 border-creative-red-500/30">
                  <SelectValue placeholder="Selecione o gênero" />
                </SelectTrigger>
                <SelectContent className="bg-background border-creative-red-500/30">
                  <SelectItem value="acao-futurista">Ação Futurista</SelectItem>
                  <SelectItem value="terror-psicologico">Terror Psicológico</SelectItem>
                  <SelectItem value="fantasia-medieval">Fantasia Medieval</SelectItem>
                  <SelectItem value="ficcao-cientifica">Ficção Científica</SelectItem>
                  <SelectItem value="aventura-exploracaco">Aventura/Exploração</SelectItem>
                  <SelectItem value="rpg-narrativo">RPG Narrativo</SelectItem>
                  <SelectItem value="survival-horror">Survival Horror</SelectItem>
                  <SelectItem value="cyberpunk">Cyberpunk</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="references">Referências Criativas</Label>
              <Input
                id="references"
                placeholder="Ex: Blade Runner, The Witcher, Stranger Things"
                value={formData.references}
                onChange={(e) => handleInputChange('references', e.target.value)}
                className="bg-background/50 border-creative-red-500/30 focus:border-creative-red-500"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover-lift">
          <CardHeader>
            <CardTitle className="text-creative-red-400">Especificações Técnicas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="perspective">Perspectiva de Jogo</Label>
              <Select onValueChange={(value) => handleInputChange('perspective', value)}>
                <SelectTrigger className="bg-background/50 border-creative-red-500/30">
                  <SelectValue placeholder="Selecione a perspectiva" />
                </SelectTrigger>
                <SelectContent className="bg-background border-creative-red-500/30">
                  <SelectItem value="primeira-pessoa">Primeira Pessoa</SelectItem>
                  <SelectItem value="terceira-pessoa">Terceira Pessoa</SelectItem>
                  <SelectItem value="isometrica">Isométrica</SelectItem>
                  <SelectItem value="lateral-2d">Lateral 2D</SelectItem>
                  <SelectItem value="top-down">Top-Down</SelectItem>
                  <SelectItem value="realidade-virtual">Realidade Virtual</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="elements">Elementos Obrigatórios</Label>
              <Input
                id="elements"
                placeholder="Ex: crafting, narrativa ramificada, IA inimiga"
                value={formData.elements}
                onChange={(e) => handleInputChange('elements', e.target.value)}
                className="bg-background/50 border-creative-red-500/30 focus:border-creative-red-500"
              />
            </div>

            <div>
              <Label htmlFor="purpose">Finalidade do Projeto</Label>
              <Select onValueChange={(value) => handleInputChange('purpose', value)}>
                <SelectTrigger className="bg-background/50 border-creative-red-500/30">
                  <SelectValue placeholder="Selecione a finalidade" />
                </SelectTrigger>
                <SelectContent className="bg-background border-creative-red-500/30">
                  <SelectItem value="jogo-comercial">Jogo Comercial</SelectItem>
                  <SelectItem value="experimento-academico">Experimento Acadêmico</SelectItem>
                  <SelectItem value="mvp-prototipo">MVP/Protótipo</SelectItem>
                  <SelectItem value="portfolio-pessoal">Portfólio Pessoal</SelectItem>
                  <SelectItem value="game-jam">Game Jam</SelectItem>
                  <SelectItem value="projeto-estudantil">Projeto Estudantil</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card hover-lift">
        <CardHeader>
          <CardTitle className="text-creative-red-400">História e Motivação Central</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="story">Descreva sua ideia *</Label>
            <Textarea
              id="story"
              placeholder="Ex: Um guerreiro sem memória tenta descobrir por que está sendo caçado por versões de si mesmo. Cada confronto revela fragmentos de um passado que pode destruir a realidade."
              value={formData.story}
              onChange={(e) => handleInputChange('story', e.target.value)}
              className="min-h-32 bg-background/50 border-creative-red-500/30 focus:border-creative-red-500"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button
          onClick={generateCreativePackage}
          disabled={isGenerating}
          className="creative-gradient hover:scale-105 transition-all duration-300 text-white font-bold py-4 px-8 rounded-xl glow-red"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Sparkles className="w-5 h-5 mr-2 animate-spin" />
              Gerando Pacote Criativo...
            </>
          ) : (
            <>
              <Lightbulb className="w-5 h-5 mr-2" />
              Gerar Pacote Criativo Completo
            </>
          )}
        </Button>
      </div>

      {!isGenerating && formData.title && (
        <Card className="glass-card hover-lift animate-fade-in">
          <CardHeader>
            <CardTitle className="text-creative-red-400 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Downloads Disponíveis
            </CardTitle>
            <CardDescription>
              Clique nos botões abaixo para baixar cada arquivo do seu pacote criativo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Button
                onClick={generateDocumentation}
                variant="outline"
                className="group flex items-center gap-2 hover-lift border-creative-red-500/30 hover:bg-creative-red-500/20 hover:border-creative-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-creative-red-500/25 hover:scale-105"
              >
                <FileText className="w-4 h-4 group-hover:text-creative-red-400 transition-colors duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">Documentação</span>
              </Button>

              <Button
                onClick={generateImagePrompt}
                variant="outline"
                className="group flex items-center gap-2 hover-lift border-creative-red-500/30 hover:bg-creative-red-500/20 hover:border-creative-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-creative-red-500/25 hover:scale-105"
              >
                <Sparkles className="w-4 h-4 group-hover:text-creative-red-400 transition-colors duration-300 group-hover:animate-pulse" />
                <span className="group-hover:text-white transition-colors duration-300">Prompts de Imagem</span>
              </Button>

              <Button
                onClick={generateCodePrompt}
                variant="outline"
                className="group flex items-center gap-2 hover-lift border-creative-red-500/30 hover:bg-creative-red-500/20 hover:border-creative-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-creative-red-500/25 hover:scale-105"
              >
                <Code className="w-4 h-4 group-hover:text-creative-red-400 transition-colors duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">Prompts de Código</span>
              </Button>

              <Button
                onClick={generateFolderStructure}
                variant="outline"
                className="group flex items-center gap-2 hover-lift border-creative-red-500/30 hover:bg-creative-red-500/20 hover:border-creative-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-creative-red-500/25 hover:scale-105"
              >
                <Folder className="w-4 h-4 group-hover:text-creative-red-400 transition-colors duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">Estrutura do Projeto</span>
              </Button>
            </div>

            <div className="mt-4 flex justify-center">
              <Button
                onClick={generatePitch}
                variant="outline"
                className="group flex items-center gap-2 hover-lift border-creative-red-500/30 hover:bg-creative-red-500/10 creative-gradient text-white hover:shadow-xl hover:shadow-creative-red-500/30 hover:scale-110 transition-all duration-300"
              >
                <Megaphone className="w-4 h-4 group-hover:animate-bounce" />
                <span className="font-semibold">Pitch Comercial Completo</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CreativeBrainstormForm;
