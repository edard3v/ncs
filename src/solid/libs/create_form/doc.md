# createForm

- Ejecuta y pasa un schema de zod y un objeto con un success
- success es una fn que se ejecutará si el form es valido e irá cargada con objeto que tendrá los inputs
- Si desea que llegue tipado el objeto con inputs envie un generico a createForm

```
create_form<T>()
```

- Enlace la ref que returna createForm a su formulario
- Se require poner un name a c/input para registrarlo (No hay soporte para registrar inputs con el mismo name)
- Con la fn success() que retorna createForm puede suscribirse al metodo que guste. si solo desea validar use la fn validate.

```ts
export default function Component() {
  const form = create_form<Schema>(schema, {
    success({ inputs }) {
      console.log(inputs.title);
    },
  });

  return (
    <div class={css.search}>
      <form
        class={css.form}
        ref={form.ref}
        onChange={() => form.validate()}
        onSubmit={(e) => {
          e.preventDefault();
          form.success();
        }}
      >
        <Search name="title" err={form.errors()?.title} />

        <Btn>Buscar</Btn>
      </form>
    </div>
  );
}
```
