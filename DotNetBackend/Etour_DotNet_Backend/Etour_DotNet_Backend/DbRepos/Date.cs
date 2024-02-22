using System;
using System.Collections.Generic;

namespace Etour_DotNet_Backend.DbRepos;

public partial class Date
{
    public int DepartureId { get; set; }

    public string? DepartureDate { get; set; }

    public string? DepartureEndDate { get; set; }

    public int DepartureNoOfDays { get; set; }

    public int PackageId { get; set; }

    public virtual Package Package { get; set; } = null!;
}
