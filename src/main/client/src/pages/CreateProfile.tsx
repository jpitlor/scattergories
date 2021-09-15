import Button, { ButtonGroup } from "@atlaskit/button";
import Form, { Field, FormFooter } from "@atlaskit/form";
import RandomAvatar from "../components/form/RandomAvatar";
import RandomNickname from "../components/form/RandomNickname";
import { useAppDispatch, actions } from "../data/store";
import { Settings } from "@piticent123/gamekit-client/lib/types";

export default function CreateProfile() {
  const dispatch = useAppDispatch();

  function onSubmit(formData: Partial<Settings>) {
    console.log(formData);
    dispatch(actions.saveSettings(formData) as any);
    dispatch(actions.connectToServer() as any);
  }

  return (
    <Form<Partial<Settings>> onSubmit={onSubmit}>
      {({ formProps }) => (
        <form {...formProps} className="prose mx-auto">
          <h1 className="text-center">Make a Profile</h1>
          <Field name="avatar" label="Avatar" isRequired>
            {({ fieldProps }) => <RandomAvatar {...fieldProps} />}
          </Field>
          <Field name="name" label="Nickname" isRequired>
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
