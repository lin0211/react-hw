export const Container = ({
  as: ComponentName = "div",
  title,
  style,
  titleStyle,
  children,
}) => {
  return (
    <ComponentName className={style}>
      <h2 className={titleStyle}>{title}</h2>
      {children}
    </ComponentName>
  );
};
