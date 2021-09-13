import { getRandomName, useAvatar } from "@piticent123/gamekit-client";
import { FormEvent, useState } from "react";
import Button, { ButtonGroup } from "@atlaskit/button";
import Form, { Field, FormFooter } from "@atlaskit/form";
import RandomAvatar from "../components/form/RandomAvatar";
import RandomNickname from "../components/form/RandomNickname";

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
            {({ fieldProps }) => <RandomAvatar {...fieldProps} />}
          </Field>
          <Field
            name="nickname"
            label="Nickname"
            defaultValue={nickname}
            isRequired
          >
            {({ fieldProps }) => <RandomNickname {...fieldProps} />}
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
