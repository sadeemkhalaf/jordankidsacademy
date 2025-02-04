export interface ButtonProps {
    variant?: "outlined" | "outlined-filled" | "filled"; // Define the button variations
    children: React.ReactNode; // Accepts button label or content
    onClick?: () => void; // Optional click event handler
    className?: string; // Optional additional classes for customization
  }
  