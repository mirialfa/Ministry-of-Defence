using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace OrderSummary.Models;

public partial class ShopContext : DbContext
{
    public ShopContext()
    {
    }

    public ShopContext(DbContextOptions<ShopContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Item> Items { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<Sequelizemetum> Sequelizemeta { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySQL("Server=localhost;Port=3306;Database=shop;User Id=root;Password='Aa123456'");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("categories");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(45)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Item>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("items");

            entity.HasIndex(e => e.CategoryId, "Item_Category_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CategoryId).HasColumnName("categoryId");
            entity.Property(e => e.Name)
                .HasMaxLength(45)
                .HasColumnName("name");

            entity.HasOne(d => d.Category).WithMany(p => p.Items)
                .HasForeignKey(d => d.CategoryId)
                .HasConstraintName("fk_category_id");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("orders");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(45)
                .HasColumnName("address");
            entity.Property(e => e.Email)
                .HasMaxLength(45)
                .HasColumnName("email");
            entity.Property(e => e.Items)
                .HasColumnType("json")
                .HasColumnName("items");
            entity.Property(e => e.Name)
                .HasMaxLength(45)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Sequelizemetum>(entity =>
        {
            entity.HasKey(e => e.Name).HasName("PRIMARY");

            entity.ToTable("sequelizemeta");

            entity.HasIndex(e => e.Name, "name").IsUnique();

            entity.Property(e => e.Name).HasColumnName("name");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
