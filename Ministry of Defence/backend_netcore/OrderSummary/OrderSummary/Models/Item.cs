using System;
using System.Collections.Generic;

namespace OrderSummary.Models;

public partial class Item
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int CategoryId { get; set; }

    public virtual Category Category { get; set; } = null!;
}
