import Form, { Field, FormFooter } from "@atlaskit/form";
import Button, { ButtonGroup } from "@atlaskit/button";
import TextField from "@atlaskit/textfield";

export function EditSettings() {
  const isAdmin = true;
  function onSubmit() {}

  return (
    <Form onSubmit={onSubmit}>
      {({ formProps }) => (
        <form {...formProps} className="p-4">
          <h3>Profile</h3>
          <Field name="avatar" label="Avatar" defaultValue="" isRequired>
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>
          <Field name="nickname" label="Nickname" defaultValue="" isRequired>
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>
          <h3>Game Settings</h3>
          <Field name="theme" label="Theme" defaultValue="" isRequired>
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>
          {isAdmin && (
            <>
              <h3>Admin Settings</h3>
            </>
          )}
          <FormFooter>
            <ButtonGroup>
              <Button type="submit" appearance="primary" className="mt-8">
                Save Settings
              </Button>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
  );
}
