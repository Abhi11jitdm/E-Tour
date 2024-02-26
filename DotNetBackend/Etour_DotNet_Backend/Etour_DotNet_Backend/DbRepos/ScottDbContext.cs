using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Etour_DotNet_Backend.DbRepos;

public partial class ScottDbContext : DbContext
{

    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //{
    //    optionsBuilder.UseLazyLoadingProxies(); 
    //}
    public ScottDbContext()
    {
    }

    public ScottDbContext(DbContextOptions<ScottDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Cost> Costs { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Date> Dates { get; set; }

    public virtual DbSet<Iternary> Iternaries { get; set; }

    public virtual DbSet<Package> Packages { get; set; }

    public virtual DbSet<Passenger> Passengers { get; set; }

    public virtual DbSet<SubCategory> SubCategories { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySQL("Server=localhost;Database=e_tour_db;user id=root;password=root");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Booking>(entity =>
        {
            entity.HasKey(e => e.BookingId).HasName("PRIMARY");

            entity.ToTable("booking");

            entity.HasIndex(e => e.PackageId, "FKatvshefl0urcynrlyqi5yh1as");

            entity.HasIndex(e => e.CustomerId, "FKso8gpp93vegy1aal4p2bfst8j");

            entity.Property(e => e.BookingId).HasColumnName("booking_id");
            entity.Property(e => e.BookingDate)
                .HasMaxLength(255)
                .HasColumnName("booking_date");
            entity.Property(e => e.CustomerId).HasColumnName("customer_id");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.Flag).HasColumnName("flag");
            entity.Property(e => e.MsgBody)
                .HasMaxLength(255)
                .HasColumnName("msg_body");
            entity.Property(e => e.PackageId).HasColumnName("package_id");
            entity.Property(e => e.Recipient)
                .HasMaxLength(255)
                .HasColumnName("recipient");
            entity.Property(e => e.Taxes).HasColumnName("taxes");
            entity.Property(e => e.TotalAmount).HasColumnName("total_amount");
            entity.Property(e => e.TourAmount).HasColumnName("tour_amount");

            entity.HasOne(d => d.Customer).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKso8gpp93vegy1aal4p2bfst8j");

            entity.HasOne(d => d.Package).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.PackageId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKatvshefl0urcynrlyqi5yh1as");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("PRIMARY");

            entity.ToTable("category");

            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.CategoryImagePath)
                .HasMaxLength(255)
                .HasColumnName("category_image_path");
            entity.Property(e => e.CategoryInfo)
                .HasMaxLength(255)
                .HasColumnName("category_info");
            entity.Property(e => e.CategoryName)
                .HasMaxLength(255)
                .HasColumnName("category_name");
        });

        modelBuilder.Entity<Cost>(entity =>
        {
            entity.HasKey(e => e.CostId).HasName("PRIMARY");

            entity.ToTable("cost");

            entity.HasIndex(e => e.PackageId, "FK77lknbtc470dcfciifim60bav");

            entity.Property(e => e.CostId).HasColumnName("cost_id");
            entity.Property(e => e.ChildWithBed).HasColumnName("child_with_bed");
            entity.Property(e => e.ChildWithoutBed).HasColumnName("child_without_bed");
            entity.Property(e => e.Cost1).HasColumnName("cost");
            entity.Property(e => e.ExtraPersonCost).HasColumnName("extra_person_cost");
            entity.Property(e => e.PackageId).HasColumnName("package_id");
            entity.Property(e => e.SinglePersonCost).HasColumnName("single_person_cost");
            entity.Property(e => e.TwinSharing).HasColumnName("twin_sharing");
            entity.Property(e => e.ValidFrom)
                .HasMaxLength(255)
                .HasColumnName("valid_from");
            entity.Property(e => e.ValidTo)
                .HasMaxLength(255)
                .HasColumnName("valid_to");

            entity.HasOne(d => d.Package).WithMany(p => p.Costs)
                .HasForeignKey(d => d.PackageId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK77lknbtc470dcfciifim60bav");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.CustomerId).HasName("PRIMARY");

            entity.ToTable("customers");

            entity.HasIndex(e => e.Email, "email_UNIQUE").IsUnique();

            entity.HasIndex(e => e.Mobile, "mobile_UNIQUE").IsUnique();

            entity.HasIndex(e => e.Username, "username_UNIQUE").IsUnique();

            entity.Property(e => e.CustomerId).HasColumnName("customer_id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.City)
                .HasMaxLength(255)
                .HasColumnName("city");
            entity.Property(e => e.Dateofbirth)
                .HasMaxLength(255)
                .HasColumnName("dateofbirth");
            entity.Property(e => e.Email).HasColumnName("email");
            entity.Property(e => e.Firstname)
                .HasMaxLength(255)
                .HasColumnName("firstname");
            entity.Property(e => e.Gender)
                .HasMaxLength(255)
                .HasColumnName("gender");
            entity.Property(e => e.Lastname)
                .HasMaxLength(255)
                .HasColumnName("lastname");
            entity.Property(e => e.Mobile).HasColumnName("mobile");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.Pincode)
                .HasMaxLength(255)
                .HasColumnName("pincode");
            entity.Property(e => e.State)
                .HasMaxLength(255)
                .HasColumnName("state");
            entity.Property(e => e.Username).HasColumnName("username");
        });

        modelBuilder.Entity<Date>(entity =>
        {
            entity.HasKey(e => e.DepartureId).HasName("PRIMARY");

            entity.ToTable("date");

            entity.HasIndex(e => e.PackageId, "FKdhgnimudvvjv1s242tm4wmk4v");

            entity.Property(e => e.DepartureId).HasColumnName("departure_id");
            entity.Property(e => e.DepartureDate)
                .HasMaxLength(255)
                .HasColumnName("departure_date");
            entity.Property(e => e.DepartureEndDate)
                .HasMaxLength(255)
                .HasColumnName("departure_end_date");
            entity.Property(e => e.DepartureNoOfDays).HasColumnName("departure_no_of_days");
            entity.Property(e => e.PackageId).HasColumnName("package_id");

            entity.HasOne(d => d.Package).WithMany(p => p.Dates)
                .HasForeignKey(d => d.PackageId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKdhgnimudvvjv1s242tm4wmk4v");
        });

        modelBuilder.Entity<Iternary>(entity =>
        {
            entity.HasKey(e => e.IterneryId).HasName("PRIMARY");

            entity.ToTable("iternary");

            entity.HasIndex(e => e.PackageId, "FKq8c04cjemeaamrqmv48uc3kl8");

            entity.Property(e => e.IterneryId).HasColumnName("iternery_id");
            entity.Property(e => e.IterneryDay)
                .HasMaxLength(255)
                .HasColumnName("iternery_day");
            entity.Property(e => e.IterneryImgpath)
                .HasMaxLength(255)
                .HasColumnName("iternery_imgpath");
            entity.Property(e => e.IterneryInfo)
                .HasMaxLength(3000)
                .HasColumnName("iternery_info");
            entity.Property(e => e.PackageId).HasColumnName("package_id");

            entity.HasOne(d => d.Package).WithMany(p => p.Iternaries)
                .HasForeignKey(d => d.PackageId)
                .HasConstraintName("FKq8c04cjemeaamrqmv48uc3kl8");
        });

        modelBuilder.Entity<Package>(entity =>
        {
            entity.HasKey(e => e.PackageId).HasName("PRIMARY");

            entity.ToTable("packages");

            entity.HasIndex(e => e.SubcategoryId, "FKfrefa49diocngeoid6my6hkcd");

            entity.HasIndex(e => e.CategoryId, "FKteay63mtqf4y0q869itefuops");

            entity.Property(e => e.PackageId).HasColumnName("package_id");
            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.PackageImagePath)
                .HasMaxLength(255)
                .HasColumnName("package_image_path");
            entity.Property(e => e.PackageInfo)
                .HasMaxLength(255)
                .HasColumnName("package_info");
            entity.Property(e => e.PackageName)
                .HasMaxLength(255)
                .HasColumnName("package_name");
            entity.Property(e => e.SubcategoryId).HasColumnName("subcategory_id");

            entity.HasOne(d => d.Category).WithMany(p => p.Packages)
                .HasForeignKey(d => d.CategoryId)
                .HasConstraintName("FKteay63mtqf4y0q869itefuops");

            entity.HasOne(d => d.Subcategory).WithMany(p => p.Packages)
                .HasForeignKey(d => d.SubcategoryId)
                .HasConstraintName("FKfrefa49diocngeoid6my6hkcd");
        });

        modelBuilder.Entity<Passenger>(entity =>
        {
            entity.HasKey(e => e.PaxId).HasName("PRIMARY");

            entity.ToTable("passenger");

            entity.HasIndex(e => e.PackageId, "FK5bwncqhjqpi0jdvn02j0br2xa");

            entity.HasIndex(e => e.CustomerId, "FKa4rwyahmk3workwa3j3mwms2e");

            entity.HasIndex(e => e.BookingId, "FKtco0omesfld1qi5sw76eomvt4");

            entity.Property(e => e.PaxId).HasColumnName("pax_id");
            entity.Property(e => e.BookingId).HasColumnName("booking_id");
            entity.Property(e => e.CustomerId).HasColumnName("customer_id");
            entity.Property(e => e.PackageId).HasColumnName("package_id");
            entity.Property(e => e.PaxAmount).HasColumnName("pax_amount");
            entity.Property(e => e.PaxBirthdate)
                .HasMaxLength(255)
                .HasColumnName("pax_birthdate");
            entity.Property(e => e.PaxName)
                .HasMaxLength(255)
                .HasColumnName("pax_name");
            entity.Property(e => e.PaxType)
                .HasMaxLength(255)
                .HasColumnName("pax_type");

            entity.HasOne(d => d.Booking).WithMany(p => p.Passengers)
                .HasForeignKey(d => d.BookingId)
                .HasConstraintName("FKtco0omesfld1qi5sw76eomvt4");

            entity.HasOne(d => d.Customer).WithMany(p => p.Passengers)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKa4rwyahmk3workwa3j3mwms2e");

            entity.HasOne(d => d.Package).WithMany(p => p.Passengers)
                .HasForeignKey(d => d.PackageId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK5bwncqhjqpi0jdvn02j0br2xa");
        });

        modelBuilder.Entity<SubCategory>(entity =>
        {
            entity.HasKey(e => e.SubcategoryId).HasName("PRIMARY");

            entity.ToTable("sub_category");

            entity.HasIndex(e => e.CategoryId, "FKl65dyy5me2ypoyj8ou1hnt64e");

            entity.Property(e => e.SubcategoryId).HasColumnName("subcategory_id");
            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.SubcategoryImgagePath)
                .HasMaxLength(255)
                .HasColumnName("subcategory_imgage_path");
            entity.Property(e => e.SubcategoryInfo)
                .HasMaxLength(255)
                .HasColumnName("subcategory_info");
            entity.Property(e => e.SubcategoryName)
                .HasMaxLength(255)
                .HasColumnName("subcategory_name");

            entity.HasOne(d => d.Category).WithMany(p => p.SubCategories)
                .HasForeignKey(d => d.CategoryId)
                .HasConstraintName("FKl65dyy5me2ypoyj8ou1hnt64e");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
