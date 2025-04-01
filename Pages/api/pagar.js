import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { total, referencia } = req.body; // Recibimos la información del pago

    try {
      // Realizamos la petición a la API de Wompi
      const response = await axios.post(
        "https://sandbox.wompi.co/v1/transactions",
        {
          amount_in_cents: total * 100, // Total del pago en centavos (Wompi requiere centavos)
          currency: "COP", // Moneda en COP (peso colombiano)
          customer_email: "cliente@email.com", // Email del cliente (esto puede ser dinámico)
          payment_method: {
            type: "CARD", // Tipo de pago, en este caso tarjeta
            token: "TOKEN_DE_PRUEBA", // El token del formulario de pago
          },
          reference: referencia, // Referencia única para el pago
        },
        {
          headers: {
            Authorization: `Bearer prv_prod_Ing7qI5Ypxc4MvcnOuHiY9s6UQfQSYvn`, // Autenticación con tu clave privada
          },
        }
      );

      // Enviar la respuesta de Wompi al cliente
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ mensaje: "Método no permitido" });
  }
}
