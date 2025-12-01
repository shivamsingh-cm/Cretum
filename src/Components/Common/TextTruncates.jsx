const TextTruncate = (props) => {
  const { children, lines = 3, className = "", as: Component = "p" } = props;
  const lineClampClass = `line-clamp-${lines}`;

  return (
    <Component className={`${lineClampClass} ${className}`}>
      {children}
    </Component>
  );
};

export default TextTruncate;
