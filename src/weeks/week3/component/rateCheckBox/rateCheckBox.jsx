import { FormInput } from "../";

export const RateCheckBox = () => {
  return (
    <ul role="group" className="flex justify-center">
      {Array(5)
        .fill(1)
        .map((item, index) => {
          const label = `별점${index + item}점`;
          return (
            <FormInput
              key={label}
              as="li"
              name="movieRate"
              type="checkbox"
              label={label}
              hiddenLabel
              inputTailWindCss="inputRateCheckbox"
            ></FormInput>
          );
        })}
    </ul>
  );
};
