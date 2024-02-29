using Etour_DotNet_Backend.DbRepos;
using Etour_DotNet_Backend.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Etour_DotNet_Backend.Controllers
{
    [Route("api/cost")]
    [ApiController]
    public class CostController : ControllerBase
    {
        private readonly ICostRepository _costRepository;

        public CostController(ICostRepository costRepository)
        {
            _costRepository = costRepository;
        }

        [HttpGet("{id}")]
        public Cost? GetCostByPackId(int id)
        {
            return _costRepository.GetCostByPackageId(id);
        }
    }
}