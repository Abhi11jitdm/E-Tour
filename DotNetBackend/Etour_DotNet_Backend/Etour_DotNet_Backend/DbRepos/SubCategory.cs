using System;
using System.Collections.Generic;

namespace Etour_DotNet_Backend.DbRepos;

public partial class SubCategory
{
    public int SubcategoryId { get; set; }

    public int? CategoryId { get; set; }

    public string? SubcategoryImgagePath { get; set; }

    public string? SubcategoryInfo { get; set; }

    public string? SubcategoryName { get; set; }

    public virtual Category? Category { get; set; }

    public virtual ICollection<Package> Packages { get; } = new List<Package>();
}
