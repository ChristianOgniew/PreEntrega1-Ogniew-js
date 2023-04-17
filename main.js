let Bienvenida = prompt(
  "Hola, Bienvenido a BANCO HYGGE donde su dinero crypto va a crecer exponencialmente \n Cuanto dinero usted quiere empezar a stackear? \n 1 - 10.000  \n 2 - 50.000 \n 3 - 100.000 \n 4 - Deseo stackear otro importe \n 0- Salir "
);

if (Bienvenida !== "0") {
  switch (Bienvenida) {
    case "1":
      alert(
        "Considerando el TNA actual de 65%, su ganancia sería de $6.500. A continuación, le pediremos que complete sus datos para continuar con la gestión."
      );
      let usuario = prompt("Por favor indique su Nombre");
      let mailUsuario = prompt("Por favor ingrese su Mail");
      alert("En minutos recibirá todos los detalles en: " + mailUsuario);
      console.log("El usuario es " + usuario + " y su mail es " + mailUsuario);
      break;

    case "2":
      alert(
        "Considerando el TNA actual de 65%, su ganancia sería de $32.500. A continuación, le pediremos que complete sus datos para continuar con la gestión."
      );
      let usuario1 = prompt("Por favor indique su Nombre");
      let mailUsuario1 = prompt("Por favor ingrese su Mail");
      alert("En minutos recibirá todos los detalles en: " + mailUsuario1);
      console.log(
        "El usuario es " + usuario1 + " y su mail es " + mailUsuario1
      );
      break;

    case "3":
      alert(
        "Considerando el TNA actual de 65%, su ganancia sería de $65.000. A continuación, le pediremos que complete sus datos para continuar con la gestión."
      );
      let usuario2 = prompt("Por favor indique su Nombre");
      let mailUsuario2 = prompt("Por favor ingrese su Mail");
      alert("En minutos recibirá todos los detalles en: " + mailUsuario2);
      console.log(
        "El usuario es " + usuario2 + " y su mail es " + mailUsuario2
      );
      break;

    case "4":
      let importeCustom = Number(
        prompt("Por favor indique su Importe a stackear")
      );
      alert(
        " Considerando el TNA actual de 65% su ganancia seria de:" +
          " " +
          "$" +
          importeCustom * 0.65
      );
      let usuarioCustom = prompt("Por favor indique su Nombre");
      let mailUsuarioCustom = prompt("Por favor ingrese su Mail");
      alert("En minutos recibirá todos los detalles en: " + mailUsuarioCustom);
      console.log(
        "El usuario es " + usuarioCustom + " y su mail es " + mailUsuarioCustom
      );
      break;

    default:
      alert("Opción no válida. Por favor vuelva a intentarlo.");
      break;

    case "0":
      alert(
        "Ha sido un gusto que te hayas contactado con nosotros. ¡Te esperamos pronto!"
      );
      break;
  }
}
alert(
  "Ha sido un gusto que te hayas contactado con nosotros. ¡Que tengas un buen día!"
);
