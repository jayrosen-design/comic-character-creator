
import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/theme-provider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-primary/20 hover:bg-primary/5 dark:hover:bg-gray-700/50"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={16} className="text-gray-700" />
      ) : (
        <Sun size={16} className="text-gray-300" />
      )}
    </Button>
  );
};

export default ThemeToggle;
