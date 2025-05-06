exports.post = async (event) => {
  const body = JSON.parse(event.body); // Convertimos el string a objeto
  const nombre = body.nombre;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello " + nombre,
    }),
  };
};
