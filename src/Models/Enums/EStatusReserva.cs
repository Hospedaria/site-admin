using System.ComponentModel;

namespace Reservas.Site.Models.Enums
{
    public enum EStatusReserva
    {
        [Description("Pré-reservado")]
        PreReservado,

        [Description("Confirmado")]
        Confirmado,

        [Description("Cancelado")]
        Cancelado
    }
}