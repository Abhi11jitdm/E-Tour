using System;
using System.Collections.Generic;

namespace Etour_DotNet_Backend.DbRepos;

public partial class Passenger
{
    public int PaxId { get; set; }

    public int? BookingId { get; set; }

    public int CustomerId { get; set; }

    public int PackageId { get; set; }

    public int PaxAmount { get; set; }

    public string? PaxBirthdate { get; set; }

    public string? PaxName { get; set; }

    public string? PaxType { get; set; }

    //public virtual Booking? Booking { get; set; }

    //public virtual Customer Customer { get; set; } = null!;

    //public virtual Package Package { get; set; } = null!;
}
