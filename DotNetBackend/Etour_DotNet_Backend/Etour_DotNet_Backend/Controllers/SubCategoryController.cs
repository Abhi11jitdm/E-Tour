using Etour_DotNet_Backend.DbRepos;
using Etour_DotNet_Backend.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Etour_DotNet_Backend.Controllers
{
    [ApiController]
    [Route("/api/subcategory")]
    public class SubCategoryController : Controller
    {

        private readonly ISubCategoryRepository _subCategory;

        public SubCategoryController(ISubCategoryRepository subCategory)
        {

            _subCategory = subCategory;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<SubCategory>>> GetPackageById(int id)
        {
            var subcategories = await _subCategory.GetSubCategoriesByCategoryId(id);

            if (subcategories == null)
            {
                return NotFound(); // Return 404 Not Found if no subcategories are found
            }

            return subcategories;
        }


    }
}
