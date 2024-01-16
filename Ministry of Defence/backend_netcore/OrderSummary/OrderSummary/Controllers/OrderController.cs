using Microsoft.AspNetCore.Mvc;
using OrderSummary.Models;

namespace OrderSummary.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {

        private readonly ILogger<OrderController> _logger;
        private readonly ShopContext _shopContext;

        public OrderController(ILogger<OrderController> logger, ShopContext shopContext)
        {
            _logger = logger;
            _shopContext = shopContext;
        }



        [HttpPost]
        public ActionResult Post(Order order)
        {
                _shopContext.Orders.Add(order);
                _shopContext.SaveChanges();
                return Ok(order);
        }
    }
}
