let Bienvenida = prompt(
  "Hola, Bienvenido a BANCO HYGGE donde su dinero crypto va a crecer exponencialmente \n Cuanto dinero usted quiere empezar a stackear? \n 1 - 10.000  \n 2 - 50.000 \n 3 - 100.000 \n 0 - Salir "
);

if (Bienvenida != 0) {
  switch (Bienvenida) {
    case "1":
      alert(
        "Considerando el TNA actual su ganancia seria de $6.500 a continuacion le pediremos que complete sus datos para continuar con la gestion"
      );
      let usuario = prompt("Por favor indique su Nombre");
      let mailUsuario = prompt("Por favor ingrese su Mail");
      alert("En minutos recibira todos los detalles en:" + " " + mailUsuario);
      console.log(
        "El usuario es" +
          " " +
          usuario +
          " " +
          "y su mail es" +
          " " +
          mailUsuario
      );
      break;

    case "2":
      alert(
        "Considerando el TNA actual su ganancia seria de $32.500 a continuacion le pediremos que complete sus datos para continuar con la gestion"
      );
      let usuario1 = prompt("Por favor indique su Nombre");
      let mailUsuario1 = prompt("Por favor ingrese su Mail");
      alert("En minutos recibira todos los detalles en :" + " " + mailUsuario1);
      console.log(
        "El usuario es" +
          " " +
          usuario1 +
          " " +
          "y su mail es" +
          " " +
          mailUsuario1
      );
      break;

    case "3":
      alert(
        "Considerando el TNA actual su ganancia seria de $65.000 a continuacion le pediremos que complete sus datos para continuar con la gestion"
      );
      let usuario2 = prompt("Por favor indique su Nombre");
      let mailUsuario2 = prompt("Por favor ingrese su Mail");
      alert("En minutos recibira todos los detalles en :" + " " + mailUsuario2);
      console.log(
        "El usuario es" +
          " " +
          usuario2 +
          " " +
          "y su mail es" +
          " " +
          mailUsuario2
      );
      break;

    case "0":
      alert(
        "Ha sido un gusto que te hayas contactado con nosotros, te esperamos pronto!"
      );
      break;
    default:
      alert("Opcion no valida Por favor vuelva a intentarlo");
      break;
  }
}
alert(
  "Ha sido un gusto que te hayas contactado con nosotros, Que tengas un buen dia!"
);
