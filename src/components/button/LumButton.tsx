export type LumButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function LumButton({ children, ...rest }: LumButtonProps) {
  return <button {...rest}>{children}</button>;
}

export default LumButton;
