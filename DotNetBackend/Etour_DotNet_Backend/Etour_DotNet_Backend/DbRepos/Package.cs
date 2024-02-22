using System;
using System.Collections.Generic;

namespace Etour_DotNet_Backend.DbRepos;

public partial class Package
{
    public int PackageId { get; set; }

    public int? CategoryId { get; set; }

    public string? PackageImagePath { get; set; }

    public string? PackageInfo { get; set; }

    public string? PackageName { get; set; }

    public int? SubcategoryId { get; set; }

    public virtual ICollection<Booking> Bookings { get; } = new List<Booking>();

    public virtual Category? Category { get; set; }

    public virtual ICollection<Cost> Costs { get; } = new List<Cost>();

    public virtual ICollection<Date> Dates { get; } = new List<Date>();

    public virtual ICollection<Iternary> Iternaries { get; } = new List<Iternary>();

    public virtual ICollection<Passenger> Passengers { get; } = new List<Passenger>();

    public virtual SubCategory? Subcategory { get; set; }
}
