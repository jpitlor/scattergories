import { FieldProps } from "@atlaskit/form";
import Select from "@atlaskit/select";

interface Props {
  fieldProps: FieldProps<any>;
  options: string[];
}
export default function SelectField({ fieldProps, options }: Props) {
  return <Select {...fieldProps} options={options} />;
}
