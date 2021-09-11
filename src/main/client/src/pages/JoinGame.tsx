import Form, { Field, FormFooter } from "@atlaskit/form";
import Button, { ButtonGroup } from "@atlaskit/button";
import TextField from "@atlaskit/textfield";

export default function JoinGame() {
  function onSubmit() {}

  return (
    <Form onSubmit={onSubmit}>
      {({ formProps }) => (
        <form {...formProps} className="prose mx-auto">
          <h1 className="text-center">Join a Game</h1>
          <Field
            name="shouldCreateGame"
            label="Select Choice"
            defaultValue=""
            isRequired
          >
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>
          <FormFooter>
            <ButtonGroup>
              <Button type="submit" appearance="primary" className="mt-8">
                Join Game
              </Button>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
  );
}
