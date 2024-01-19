using Reservas.Site.Models.Enums;

namespace Reservas.Site.Models
{
    public class ReservaViewModel
    {
        public ReservaViewModel()
        {
            NomeResponsavel = string.Empty;
            DataInicioHospedagem = DateTime.Now;
            DataTerminoHospedagem = DateTime.Now.AddDays(1);
            Suites = [];
            HoraChegada = "12:00";
            Observacoes = string.Empty;
        }

        public int Id { get; set; }
        public string NomeResponsavel { get; set; }
        public DateTime DataInicioHospedagem { get; set; }
        public string HoraChegada { get; set; }
        public DateTime DataTerminoHospedagem { get; set; }
        public double Valor { get; set; }
        public short QuantidadeAdultos {get;set;}
        public short QuantidadeCriancas {get;set;}

        public EStatusReserva Status { get; set; }
        public string Observacoes { get; set; }
        public List<string> Suites { get; set; }

        public static readonly List<string> OpcoesSuites = [
            "Amarela", "Vermelha", "Azul", "Verde", "Chalé"
        ];
    }
}