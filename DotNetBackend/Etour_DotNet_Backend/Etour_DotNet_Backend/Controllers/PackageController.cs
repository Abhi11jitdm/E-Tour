using Etour_DotNet_Backend.DbRepos;
using Etour_DotNet_Backend.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Etour_DotNet_Backend.Controllers
{
    [ApiController]
    [Route("/api/package")]
    public class PackageController : Controller
    {
        private readonly IPackageRepository _packageRepository;

        public PackageController(IPackageRepository packageRepository)
        {
            
            _packageRepository = packageRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Package>?>> GetPackages()
        {
            if (await _packageRepository.getPackages() == null)
            {
                return NotFound();
            }
            return await _packageRepository.getPackages();
        }

        [HttpGet("subcategory/{id}")]
        public async Task<ActionResult<IEnumerable<Package>>> GetPackageBySubCategoryId(int id)
        {
            var packages = await _packageRepository.GetPackagesBySubCategoryId(id);

            if (packages == null)
            {
                return NotFound(); // Return 404 Not Found if no subcategories are found
            }

            return packages;
        }

        [HttpGet("category/{id}")]
        public async Task<ActionResult<IEnumerable<Package>>> GetPackageByCategoryId(int id)
        {
            var packages = await _packageRepository.GetPackagesByCategoryId(id);

            if (packages == null)
            {
                return NotFound(); // Return 404 Not Found if no subcategories are found
            }

            return packages;
        }

        [HttpGet("/package/{id}")]
        public async Task<Package> getPackageById(int id)
        {
            var package = await _packageRepository.getPackageById(id);
            return package;
        }
    }
}