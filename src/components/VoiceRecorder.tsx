import { useState, useRef } from 'react';
import { Mic, Square, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

interface VoiceRecorderProps {
  onRecordingComplete: (audioBlob: Blob, transcript: string) => void;
  onLanguageDetected: (language: string) => void;
}

export const VoiceRecorder = ({ onRecordingComplete, onLanguageDetected }: VoiceRecorderProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        stream.getTracks().forEach(track => track.stop());
        
        setIsProcessing(true);
        await processAudio(audioBlob);
        setIsProcessing(false);
      };

      mediaRecorder.start();
      setIsRecording(true);
      toast.success('Recording started');
    } catch (error) {
      console.error('Error accessing microphone:', error);
      toast.error('Failed to access microphone');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      toast.info('Processing audio...');
    }
  };

  const processAudio = async (audioBlob: Blob) => {
    try {
      // Simulate speech-to-text and language detection
      // In production, this would call actual API services
      
      // Mock transcript
      const mockTranscript = "ನಾನು ಆಹಾರವನ್ನು ಇಷ್ಟಪಡುತ್ತೇನೆ"; // Kannada: "I like food"
      
      // Detect language based on transcript
      const detectedLanguage = detectLanguage(mockTranscript);
      
      onLanguageDetected(detectedLanguage);
      onRecordingComplete(audioBlob, mockTranscript);
      
      toast.success(`Language detected: ${getLanguageName(detectedLanguage)}`);
    } catch (error) {
      console.error('Error processing audio:', error);
      toast.error('Failed to process audio');
    }
  };

  const detectLanguage = (text: string): string => {
    // Simple Unicode range-based language detection
    const kannadaRegex = /[\u0C80-\u0CFF]/;
    const tamilRegex = /[\u0B80-\u0BFF]/;
    const teluguRegex = /[\u0C00-\u0C7F]/;
    const malayalamRegex = /[\u0D00-\u0D7F]/;
    const hindiRegex = /[\u0900-\u097F]/;

    if (kannadaRegex.test(text)) return 'kannada';
    if (tamilRegex.test(text)) return 'tamil';
    if (teluguRegex.test(text)) return 'telugu';
    if (malayalamRegex.test(text)) return 'malayalam';
    if (hindiRegex.test(text)) return 'hindi';
    
    return 'english';
  };

  const getLanguageName = (code: string): string => {
    const languages: Record<string, string> = {
      kannada: 'ಕನ್ನಡ (Kannada)',
      tamil: 'தமிழ் (Tamil)',
      telugu: 'తెలుగు (Telugu)',
      malayalam: 'മലയാളം (Malayalam)',
      hindi: 'हिन्दी (Hindi)',
      english: 'English'
    };
    return languages[code] || code;
  };

  return (
    <Card className="p-8 shadow-elevated">
      <div className="flex flex-col items-center gap-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Voice Language Analyzer</h2>
          <p className="text-muted-foreground">Speak to discover regional dishes</p>
        </div>

        <div className="relative">
          {isRecording && (
            <div className="absolute inset-0 animate-ping">
              <div className="w-32 h-32 rounded-full bg-primary/20" />
            </div>
          )}
          
          <Button
            size="lg"
            onClick={isRecording ? stopRecording : startRecording}
            disabled={isProcessing}
            className="w-32 h-32 rounded-full bg-gradient-warm hover:opacity-90 transition-all shadow-elevated"
          >
            {isProcessing ? (
              <Loader2 className="w-12 h-12 animate-spin" />
            ) : isRecording ? (
              <Square className="w-12 h-12" />
            ) : (
              <Mic className="w-12 h-12" />
            )}
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm font-medium">
            {isProcessing ? 'Analyzing...' : isRecording ? 'Recording... Tap to stop' : 'Tap to start recording'}
          </p>
        </div>
      </div>
    </Card>
  );
};
