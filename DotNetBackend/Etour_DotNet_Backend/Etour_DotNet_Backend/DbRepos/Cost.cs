using System;
using System.Collections.Generic;

namespace Etour_DotNet_Backend.DbRepos;

public partial class Cost
{
    public int CostId { get; set; }

    public double ChildWithBed { get; set; }

    public double ChildWithoutBed { get; set; }

    public double Cost1 { get; set; }

    public double ExtraPersonCost { get; set; }

    public int PackageId { get; set; }

    public double SinglePersonCost { get; set; }

    public double TwinSharing { get; set; }

    public string? ValidFrom { get; set; }

    public string? ValidTo { get; set; }

    public virtual Package Package { get; set; } = null!;
}
