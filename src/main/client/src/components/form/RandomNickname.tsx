import { getRandomName } from "@piticent123/gamekit-client";
import Button from "@atlaskit/button";
import RefreshIcon from "@atlaskit/icon/glyph/refresh";
import TextField from "@atlaskit/textfield";
import { FieldProps } from "@atlaskit/form";
import { useEffect, useState } from "react";

export default function RandomNickname({
  onChange,
  value,
  ...rest
}: FieldProps<any>) {
  const [nickname, setNickname] = useState(value);
  useEffect(() => {
    onChange(nickname);
  }, [nickname]);

  function getNewNickname() {
    setNickname(getRandomName());
  }

  return (
    <div className="flex flex-row gap-2 items-baseline">
      <TextField {...rest} value={value} isDisabled={true} />
      <Button
        onClick={getNewNickname}
        iconBefore={<RefreshIcon label="refresh icon" size="small" />}
      >
        New Nickname
      </Button>
    </div>
  );
}
