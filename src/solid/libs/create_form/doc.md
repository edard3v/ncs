# `create_form`

Diseñado para gestionar formularios utilizando un esquema de validación con **Zod** y un manejador de éxito personalizado.

### Características

- Recibe un esquema de Zod y un objeto de configuración que incluye una función `success`.
- La función `success` se ejecuta únicamente si el formulario es válido. Recibe un objeto que contiene los valores de los inputs.
- Para obtener un tipado estricto de los valores del formulario, puedes proporcionar un genérico:

```ts
create_form<T>();
```

- Debes vincular la referencia `ref` retornada por `create_form` al elemento `<form>`.
- Cada input debe tener un atributo `name` único. **No se admite el uso de inputs con nombres duplicados**.
- Puedes actualizar el estado del formulario utilizando la función `update`, dicha fn actua luego del primer intento de submit.

### Ejemplo

```ts
export default function Component() {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  type Schema = z.infer<typeof schema>;

  const form = create_form<Schema>(schema, {
    // Se ejecuta cuando el form es valido
    success({ inputs }) {
      console.log(inputs);
    },
  });

  return (
    <form
      ref={form.ref}
      onchange={form.update}
      onsubmit={(e) => {
        e.preventDefault();
        form.success();
      }}
    >
      <Email name="email" />
      <Password name="password" />
      <Btn>Login</Btn>
    </form>
  );
}
```
