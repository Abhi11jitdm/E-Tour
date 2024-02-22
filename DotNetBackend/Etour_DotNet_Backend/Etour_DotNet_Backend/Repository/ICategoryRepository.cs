using Etour_DotNet_Backend.DbRepos;
using Microsoft.AspNetCore.Mvc;

namespace Etour_DotNet_Backend.Repository
{
    public interface ICategoryRepository
    {
        public Task<ActionResult<IEnumerable<Category>?>> getCategories();
        public Task<Category> getCategoryById(int id);
    }
}
