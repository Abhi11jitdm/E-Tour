using System;
using System.Collections.Generic;

namespace Etour_DotNet_Backend.DbRepos;

public partial class Category
{
    public int CategoryId { get; set; }

    public string? CategoryImagePath { get; set; }

    public string? CategoryInfo { get; set; }

    public string? CategoryName { get; set; }

    public virtual ICollection<Package> Packages { get; } = new List<Package>();

    public virtual ICollection<SubCategory> SubCategories { get; } = new List<SubCategory>();
}
