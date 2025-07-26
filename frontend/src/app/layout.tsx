import { Metadata } from 'next';
import { Live2DConfigProvider } from "../context/live2d-config-context";
import { SettingsProvider } from "../context/settings-context";
import { ChatProvider } from "../context/chat-context";
import { MicrophoneProvider } from "../context/microphone-context";
import '../index.css';

export const metadata: Metadata = {
  title: 'AI Companion - Immersive Watch Together',
  description: 'Experience videos with your AI companion in an immersive Live2D environment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="/libs/live2dcubismcore.js" async></script>
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <SettingsProvider>
          <Live2DConfigProvider>
            <ChatProvider>
              <MicrophoneProvider>
                {children}
              </MicrophoneProvider>
            </ChatProvider>
          </Live2DConfigProvider>
        </SettingsProvider>
      </body>
    </html>
  );
} 