import { useId } from "react";

export const FormInputText = ({
  as: ComponentName = "div",
  name,
  division = "",
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  labelTailWindCss,
  inputTailWindCss,
  hiddenLabel = false,
  inputProps = {},
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
        type="text"
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </ComponentName>
  );
};

export default FormInputText;
