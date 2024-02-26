using Etour_DotNet_Backend.DbRepos;
using Microsoft.AspNetCore.Mvc;

namespace Etour_DotNet_Backend.Repository
{
    public interface ISubCategoryRepository
    {
        public Task<ActionResult<IEnumerable<SubCategory>>> GetSubCategoriesByCategoryId(int categoryId);
    }
}
