import Form, { Field, FormFooter } from "@atlaskit/form";
import Button, { ButtonGroup } from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import { actions, useAppDispatch, useAppSelector } from "../data/store";
import SelectField from "../components/form/SelectField";

interface FormType {
  gameCode: string;
}

export default function JoinGame() {
  const dispatch = useAppDispatch()
  const openGames = useAppSelector((state) => state.gamekit.openGames);
  const gameOptions = openGames.map((g) => ({ label: g, value: g }));

  function joinGame(data: FormType) {
    dispatch(actions.joinGame(data.gameCode))
  }

  function createGame(data: FormType) {
    dispatch(actions.createGame(data.gameCode))
  }

  return (
    <>
      <Form<FormType> onSubmit={joinGame}>
        {({ formProps }) => (
          <form {...formProps} className="prose mx-auto">
            <h2 className="text-center">Join a Game</h2>
            <Field name="gameCode" label="Game Code" isRequired>
              {({ fieldProps }) => (
                <SelectField fieldProps={fieldProps} options={gameOptions} />
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
      <Form<FormType> onSubmit={createGame}>
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
