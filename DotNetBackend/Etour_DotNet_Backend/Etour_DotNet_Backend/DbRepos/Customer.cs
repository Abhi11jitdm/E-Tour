using System;
using System.Collections.Generic;

namespace Etour_DotNet_Backend.DbRepos;

public partial class Customer
{
    public int CustomerId { get; set; }

    public string? Address { get; set; }

    public string? City { get; set; }

    public string? Dateofbirth { get; set; }

    public string? Email { get; set; }

    public string? Firstname { get; set; }

    public string? Gender { get; set; }

    public string? Lastname { get; set; }

    public string? Mobile { get; set; }

    public string? Password { get; set; }

    public string? Pincode { get; set; }

    public string? State { get; set; }

    public string? Username { get; set; }

    public virtual ICollection<Booking> Bookings { get; } = new List<Booking>();

    public virtual ICollection<Passenger> Passengers { get; } = new List<Passenger>();
}
