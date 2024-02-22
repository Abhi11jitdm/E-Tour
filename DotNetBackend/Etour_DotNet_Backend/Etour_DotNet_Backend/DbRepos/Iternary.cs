using System;
using System.Collections.Generic;

namespace Etour_DotNet_Backend.DbRepos;

public partial class Iternary
{
    public int IterneryId { get; set; }

    public string? IterneryDay { get; set; }

    public string? IterneryImgpath { get; set; }

    public string? IterneryInfo { get; set; }

    public int? PackageId { get; set; }

    public virtual Package? Package { get; set; }
}
