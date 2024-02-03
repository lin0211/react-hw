import { useId } from "react";

export const FormInput = ({
  as: ComponentName = "div",
  name,
  type = "text",
  division = "",
  label,
  placeholder,
  value,
  onChange,
  labelTailWindCss,
  inputTailWindCss,
  hiddenLabel = false,
  inputProps = {},
  ...restProps
}) => {
  const id = useId();
  return (
    <ComponentName>
      {hiddenLabel ? (
        <label className="sr-only" htmlFor={id}>
          {label}
        </label>
      ) : (
        <label className={labelTailWindCss} htmlFor={id}>
          {label}
        </label>
      )}
      {division}
      <input
        className={inputTailWindCss}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </ComponentName>
  );
};
