import Form, { Field, FormFooter } from "@atlaskit/form";
import Button, { ButtonGroup } from "@atlaskit/button";
import Select from "@atlaskit/select";
import TextField from "@atlaskit/textfield";
import { useAppSelector } from "../data/store";
import SelectField from "../components/form/SelectField";

export default function JoinGame() {
  const openGames = useAppSelector((state) => state.gamekit.openGames);
  const gameOptions = openGames.map((g) => ({ label: g, value: g }));
  function onSubmit() {}

  return (
    <>
      <Form onSubmit={onSubmit}>
        {({ formProps }) => (
          <form {...formProps} className="prose mx-auto">
            <h2 className="text-center">Join a Game</h2>
            <Field name="gameCode" label="Game Code" isRequired>
              {({ fieldProps }) => (
                <SelectField fieldProps={fieldProps} options={openGames} />
              )}
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
      <hr className="my-8 mx-32 border-neutral-50 shadow-sm" />
      <Form onSubmit={onSubmit}>
        {({ formProps }) => (
          <form {...formProps} className="prose mx-auto">
            <h2 className="text-center">Create a New Game</h2>
            <Field name="gameCode" label="Game Code" isRequired>
              {({ fieldProps }) => <TextField {...fieldProps} />}
            </Field>
            <FormFooter>
              <ButtonGroup>
                <Button type="submit" appearance="primary" className="mt-8">
                  Create Game
                </Button>
              </ButtonGroup>
            </FormFooter>
          </form>
        )}
      </Form>
    </>
  );
}
