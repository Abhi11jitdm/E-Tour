using Etour_DotNet_Backend.DbRepos;
using Etour_DotNet_Backend.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Etour_DotNet_Backend.Controllers
{
    [ApiController]
    [Route("/api/iternary")]
    public class IternaryController : Controller
    {
        private readonly IIternaryRepository iternaryRepository;

        public IternaryController(IIternaryRepository iternaryRepository)
        {
            this.iternaryRepository = iternaryRepository;
        }

        [HttpGet("{id}")]
        public Task<ActionResult<IEnumerable<Iternary>>> GetIternaryByPack(int id)
        {
            return iternaryRepository.GetIternaryByPackId(id);
        }
    }
}