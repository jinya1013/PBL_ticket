interface ButtonBaseProps {
  backgroundColor?: string;
  margin?: 'left' | 'right' | 'none';
  children?: React.ReactNode;
  className?: string;
}

export const ButtonBase: React.FC<ButtonBaseProps> = ({
  backgroundColor = '#40413F',
  margin = 'none',
  children,
  className = ''
}) => {
  const baseStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor,
    color: 'white',
    borderRadius: '5px',
    padding: '20px',
    width: '800px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
    height: '240px',
    boxSizing: 'border-box' as const,
    marginLeft: margin === 'left' ? 'auto' : undefined,
    marginRight: margin === 'right' ? 'auto' : undefined,
  };

  return (
    <div style={baseStyle} className={className}>
      {children}
    </div>
  );
};