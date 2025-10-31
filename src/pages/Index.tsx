import { useState } from 'react';
import { VoiceRecorder } from '@/components/VoiceRecorder';
import { DishGrid } from '@/components/DishGrid';
import { getDishesByLanguage, getDishesByCategory } from '@/data/dishes';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Globe, Utensils, Mic } from 'lucide-react';

const Index = () => {
  const [detectedLanguage, setDetectedLanguage] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string>('');

  const handleRecordingComplete = (audioBlob: Blob, transcriptText: string) => {
    setTranscript(transcriptText);
  };

  const handleLanguageDetected = (language: string) => {
    setDetectedLanguage(language);
  };

  const allDishes = detectedLanguage ? getDishesByLanguage(detectedLanguage) : [];
  const vegetarianDishes = detectedLanguage ? getDishesByCategory(detectedLanguage, 'vegetarian') : [];
  const nonVegDishes = detectedLanguage ? getDishesByCategory(detectedLanguage, 'non-vegetarian') : [];
  const desserts = detectedLanguage ? getDishesByCategory(detectedLanguage, 'dessert') : [];

  const getLanguageGreeting = (lang: string): string => {
    const greetings: Record<string, string> = {
      kannada: 'ನಮಸ್ಕಾರ! (Namaskara!)',
      tamil: 'வணக்கம்! (Vanakkam!)',
      telugu: 'నమస్కారం! (Namaskaaram!)',
      malayalam: 'നമസ്കാരം! (Namaskaram!)',
      hindi: 'नमस्ते! (Namaste!)',
      english: 'Hello!'
    };
    return greetings[lang] || 'Hello!';
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Globe className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Food Discovery</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-warm bg-clip-text text-transparent">
            Discover Regional Dishes
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Speak in your native language and explore authentic regional cuisine
          </p>
        </div>

        {/* Voice Recorder */}
        <div className="max-w-2xl mx-auto mb-12">
          <VoiceRecorder
            onRecordingComplete={handleRecordingComplete}
            onLanguageDetected={handleLanguageDetected}
          />
        </div>

        {/* Results Section */}
        {detectedLanguage && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Language Detection Card */}
            <Card className="p-6 shadow-elevated">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-warm rounded-lg">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{getLanguageGreeting(detectedLanguage)}</h3>
                  <p className="text-muted-foreground">
                    We detected you speak {detectedLanguage.charAt(0).toUpperCase() + detectedLanguage.slice(1)}
                  </p>
                  {transcript && (
                    <p className="text-sm mt-2 text-muted-foreground italic">
                      "{transcript}"
                    </p>
                  )}
                </div>
              </div>
            </Card>

            {/* Dishes Display */}
            <Tabs defaultValue="all" className="space-y-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="veg">Vegetarian</TabsTrigger>
                <TabsTrigger value="non-veg">Non-Veg</TabsTrigger>
                <TabsTrigger value="dessert">Desserts</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                <DishGrid dishes={allDishes} title="All Regional Dishes" />
              </TabsContent>

              <TabsContent value="veg" className="space-y-8">
                <DishGrid dishes={vegetarianDishes} title="Vegetarian Dishes" />
              </TabsContent>

              <TabsContent value="non-veg" className="space-y-8">
                <DishGrid dishes={nonVegDishes} title="Non-Vegetarian Dishes" />
              </TabsContent>

              <TabsContent value="dessert" className="space-y-8">
                <DishGrid dishes={desserts} title="Desserts" />
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Empty State */}
        {!detectedLanguage && (
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <Mic className="w-5 h-5" />
              <p>Start recording to discover regional dishes</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
