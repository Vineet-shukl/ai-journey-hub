import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, LogOut, Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';

export function UserMenu() {
  const { user, profile, signOut, loading } = useAuth();

  if (loading) {
    return (
      <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
    );
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link to="/login">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Sign In
          </Button>
        </Link>
        <Link to="/signup">
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            Get Started
          </Button>
        </Link>
      </div>
    );
  }

  const getInitials = () => {
    if (profile?.display_name) {
      return profile.display_name.slice(0, 2).toUpperCase();
    }
    if (user.email) {
      return user.email.slice(0, 2).toUpperCase();
    }
    return 'U';
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        >
          <Avatar className="w-10 h-10 border-2 border-primary/20 hover:border-primary/50 transition-colors">
            <AvatarImage src={profile?.avatar_url || undefined} />
            <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-sm font-medium">
              {getInitials()}
            </AvatarFallback>
          </Avatar>
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 glass-card border-border">
        <div className="px-3 py-2">
          <p className="text-sm font-medium text-foreground">
            {profile?.display_name || 'Learner'}
          </p>
          <p className="text-xs text-muted-foreground truncate">
            {user.email}
          </p>
        </div>
        <DropdownMenuSeparator className="bg-border" />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to="/profile" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Profile Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-border" />
        <DropdownMenuItem
          onClick={signOut}
          className="cursor-pointer text-destructive focus:text-destructive"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
