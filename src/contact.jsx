export default function Contacto() {
  return (
    <form>
      <input type="text" id="inputName" name="name" placeholder="Name" />
      <input type="e-mail" id="inputEmail" name="e-mail" placeholder="E-mail" />
      <input
        type="number"
        id="inputPhone"
        name="phone"
        placeholder="Teléfono"
      />
      <textarea
        type="text"
        id="textArea"
        name="textArea"
        placeholder="mensaje"
      />

      <button type="submit" id="inputButton" name="inputButton">
        Enviar
      </button>
    </form>
  );
}
