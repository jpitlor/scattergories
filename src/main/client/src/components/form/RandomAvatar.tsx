import { asImage, useAvatar } from "@piticent123/gamekit-client";
import Button from "@atlaskit/button";
import RefreshIcon from "@atlaskit/icon/glyph/refresh";
import { FieldProps } from "@atlaskit/form";
import { useEffect } from "react";

export default function RandomAvatar({
  value,
  onChange,
  ...rest
}: FieldProps<any>) {
  const [avatar, getNewAvatar] = useAvatar();

  useEffect(() => {
    onChange(avatar);
  }, [avatar]);

  return (
    <div className="flex flex-row items-center gap-8">
      <img
        src={asImage(value || avatar)}
        alt=""
        className="w-48 h-48 my-0!"
        tabIndex={-1}
      />
      <Button
        onClick={getNewAvatar}
        iconBefore={<RefreshIcon label="refresh icon" size="small" />}
        {...rest}
      >
        New Avatar
      </Button>
    </div>
  );
}
