//using Etour_DotNet_Backend.DbRepos;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;

//namespace Etour_DotNet_Backend.Repository
//{
//    public class CategoryRepository:ICategoryRepository
//    {
//        private readonly ScottDbContext context;

//        public CategoryRepository(ScottDbContext context)
//        {
//            this.context = context;
//        }

//        public async Task<ActionResult<IEnumerable<Category>?>> getCategories()
//        {
//            if (context == null)
//            {
//                return null;
//            }
//            //            return context.Categories.ToList();

//            return await context.Categories.Include(c => c.Packages).ToListAsync(); 

//        }

//        public async Task<Category> getCategoryById(int id)
//        {
//            if (context == null)
//            {
//                return null;
//            }
//            var category = await context.Categories.FindAsync(id);
//            if (category == null)
//            {
//                return null;
//            }
//            return category;
//        }

//    }
//}

using Etour_DotNet_Backend.DbRepos;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Etour_DotNet_Backend.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly ScottDbContext context;

        public CategoryRepository(ScottDbContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Category>> getCategories()
        {
            return await context.Categories.ToListAsync();
        }

        public async Task<Category> getCategoryById(int id)
        {
            if (context == null)
            {
                return null;
            }

            var category = await context.Categories
                .Include(c => c.Packages) // Include related packages
                .FirstOrDefaultAsync(c => c.CategoryId == id);

            return category;
        }
    }
}

