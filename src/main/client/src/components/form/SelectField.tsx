import { FieldProps } from "@atlaskit/form";
import Select from "@atlaskit/select";

interface Props {
  fieldProps: FieldProps<any>;
  options: {label: string; value: string}[];
}
export default function SelectField({ fieldProps, options }: Props) {
  return <Select {...fieldProps} options={options} />;
}
