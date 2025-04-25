import { createSignal } from "solid-js";
import type { ZodSchema } from "astro/zod";

export function create_form<T = Inputs>(schema: ZodSchema, options: Options<T>) {
  let form_ref: HTMLFormElement | undefined;
  const [inputs, set_inputs] = createSignal<T>();
  const [errors, set_errors] = createSignal<T>();
  const [is_valid, set_is_valid] = createSignal(false);
  const [has_first_submit, set_has_first_submit] = createSignal(false);

  const success = () => {
    const result = validate();
    if (!result || !result.inputs) return;
    options.success(result);
  };

  const validate = (): { inputs: T } => {
    if (!form_ref) return { inputs: {} as T };
    set_has_first_submit(true);
    const form_data = new FormData(form_ref);
    const form_entries = Object.fromEntries(form_data);
    const { error, data, success } = schema.safeParse(form_entries);

    set_is_valid(success);
    set_inputs(data);

    const errors = error?.issues
      .map((item) => ({ [item.path[0]]: item.message }))
      .reduce((acc, error) => {
        const key = Object.keys(error)[0];
        acc[key] = error[key];
        return acc;
      }, {});

    set_errors(
      errors as Exclude<T, Function> | ((prev: T | undefined) => T | undefined) | undefined
    );

    return { inputs: data };
  };

  const reset = () => form_ref?.reset();

  const update = () => {
    if (!has_first_submit()) return;
    validate();
  };

  return {
    ref: (el: HTMLFormElement) => (form_ref = el),
    inputs,
    errors,
    is_valid,
    update,
    success,
    reset,
  };
}

type Inputs = { [x: string]: string } | undefined;

type Options<T> = {
  success: (data: { inputs: T }) => void;
};
