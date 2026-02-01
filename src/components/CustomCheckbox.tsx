import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface CustomCheckboxProps {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

export function CustomCheckbox({ checked, onChange, disabled = false }: CustomCheckboxProps) {
  return (
    <motion.button
      type="button"
      role="checkbox"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={`
        relative flex items-center justify-center w-6 h-6 rounded-lg 
        transition-all duration-300 cursor-pointer
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
        ${checked 
          ? 'bg-gradient-to-br from-primary to-secondary shadow-[0_0_20px_hsl(var(--primary)/0.4)]' 
          : 'bg-muted border-2 border-border hover:border-primary/50 hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)]'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      whileHover={{ scale: disabled ? 1 : 1.1 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{
          scale: checked ? 1 : 0,
          opacity: checked ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
      </motion.div>
      
      {/* Ripple effect on check */}
      {checked && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-primary/30"
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.button>
  );
}
