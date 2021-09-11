import Form, { Field, FormFooter } from "@atlaskit/form";
import TextField from "@atlaskit/textfield";
import Button, { ButtonGroup } from "@atlaskit/button";

export function CurrentRound() {
  const categories = [
    "engine",
    "jockey",
    "inappropriate",
    "glove",
    "thick",
    "sail",
    "pavement",
    "housewife",
    "category",
    "reluctance",
    "bread",
    "version",
  ];

  function onSubmit() {}

  return (
    <Form onSubmit={onSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          {categories.map((category, i) => (
            <Field
              name={category.toLowerCase()}
              label={category}
              defaultValue=""
            >
              {({ fieldProps }) => <TextField {...fieldProps} />}
            </Field>
          ))}
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
