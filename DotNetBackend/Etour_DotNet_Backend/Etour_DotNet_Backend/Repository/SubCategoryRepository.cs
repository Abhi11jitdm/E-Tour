using Etour_DotNet_Backend.DbRepos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etour_DotNet_Backend.Repository
{
    public class SubCategoryRepository : ISubCategoryRepository
    {
        private readonly ScottDbContext context;

        public SubCategoryRepository(ScottDbContext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<IEnumerable<SubCategory>>> GetSubCategoriesByCategoryId(int categoryId)
        {
            var subcategory = context.SubCategories.FromSql($"select * from sub_category where category_id = {categoryId}");
            return subcategory.ToList();
        }
    }
}
