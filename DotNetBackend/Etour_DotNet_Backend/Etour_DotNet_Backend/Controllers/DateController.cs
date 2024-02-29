using Etour_DotNet_Backend.DbRepos;
using Etour_DotNet_Backend.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Etour_DotNet_Backend.Controllers
{
    [ApiController]
    [Route("/api/date")]
    public class DateController : Controller
    {
        private readonly IDateRepository _dateController;

        public DateController(IDateRepository dateController)
        {
            _dateController = dateController;
        }
        [HttpGet("{id}")]
        public  Task<ActionResult<IEnumerable<Date>>> GetDateByPackId(int id)
        {
            return _dateController.GetDateByPackId(id);
        }
    }
}
