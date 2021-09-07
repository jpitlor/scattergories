import { asImage, getRandomName, useAvatar } from "@piticent123/gamekit-client";
import { FormEvent, useState } from "react";
import Button, { ButtonGroup } from "@atlaskit/button";
import RefreshIcon from "@atlaskit/icon/glyph/refresh";
import Form, { Field, FormFooter } from "@atlaskit/form";
import TextField from "@atlaskit/textfield";

export default function CreateProfile() {
  const [avatar, getNewAvatar] = useAvatar();
  const [nickname, setNickname] = useState(getRandomName());

  function getNewNickname() {
    setNickname(getRandomName());
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    return false;
  }

  return (
    <Form onSubmit={onSubmit}>
      {({ formProps }) => (
        <form {...formProps} className="prose mx-auto">
          <h1 className="text-center">Make a Profile</h1>
          <Field name="avatar" label="Avatar" defaultValue={avatar} isRequired>
            {({ fieldProps }) => (
              <div>
                <img src={asImage(avatar)} alt="" className="w-48 h-48" />
                <Button
                  onClick={getNewAvatar}
                  iconBefore={<RefreshIcon label="refresh icon" size="small" />}
                >
                  New Avatar
                </Button>
              </div>
            )}
          </Field>
          <Field
            name="nickname"
            label="Nickname"
            defaultValue={nickname}
            isRequired
          >
            {({ fieldProps }) => (
              <div>
                <TextField disabled {...fieldProps} />
                <Button
                  className="mt-4"
                  onClick={getNewNickname}
                  iconBefore={<RefreshIcon label="refresh icon" size="small" />}
                >
                  New Nickname
                </Button>
              </div>
            )}
          </Field>
          <FormFooter>
            <ButtonGroup>
              <Button type="submit" appearance="primary" className="mt-8">
                Connect to Server
              </Button>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
  );
}
