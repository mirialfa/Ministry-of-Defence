using System;
using System.Collections.Generic;

namespace OrderSummary.Models;

public partial class Order
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Items { get; set; } = null!;
}
