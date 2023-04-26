import Evento from '../models/evento.js';

class EventoControllers {
  static liberaAcessoEventos = () => process.env.EVENTO_FLAG === 'true';

  static listarEventos = async (req, res) => {
    if (this.liberaAcessoEventos()) {
      try {
        const resultado = await Evento.pegarEventos();
        return res.status(200).json(resultado);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    } else {
      return res.status(404).send();
    }
  };
}

export default EventoControllers;
