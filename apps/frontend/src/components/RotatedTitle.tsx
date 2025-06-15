interface RotatedTitleProps {
  text?: string;
  position?: 'left' | 'right';
  className?: string;
  rotationClass?: string;
  spanClassName?: string;
}

export function RotatedTitle({
  text = 'AGRO SYS',
  position = 'right',
  className = '',
  rotationClass = '-rotate-90',
  spanClassName,
}: RotatedTitleProps) {
  const positionClasses =
    position === 'left'
      ? 'left-0 -translate-x-1/2'
      : 'left-full -translate-x-1/2';

  // Define o gradiente dinamicamente com base na posição
  const gradientClass =
    spanClassName ??
    (position === 'left'
      ? 'bg-[linear-gradient(to_bottom,#1B5E1F_50%,white_50%)]'
      : 'bg-[linear-gradient(to_bottom,white_50%,#1B5E1F_50%)]');

  return (
    <h1
      className={`absolute top-1/2 ${positionClasses} -translate-y-1/2 ${rotationClass} text-9xl font-extrabold ${className}`}
    >
      {text.split('').map((char, idx) => (
        <span
          key={idx}
          className={`inline-block bg-clip-text text-transparent ${gradientClass}`}
        >
          {char}
        </span>
      ))}
    </h1>
  );
}
