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

//using Etour_DotNet_Backend.DbRepos;
//using Microsoft.EntityFrameworkCore;
//using System.Collections.Generic;
//using System.Threading.Tasks;

//namespace Etour_DotNet_Backend.Repository
//{
//    public class CategoryRepository : ICategoryRepository
//    {
//        private readonly ScottDbContext context;

//        public CategoryRepository(ScottDbContext context)
//        {
//            this.context = context;
//        }

//        public async Task<IEnumerable<Category>> getCategories()
//        {
//            return await context.Categories.ToListAsync();
//        }

//        public async Task<ActionResult<IEnumerable<Category>>> getAllCategories()
//        {
//            return await context.Categories.ToListAsync();
//        }

//        public async Task<Category> getCategoryById(int id)
//        {
//            if (context == null)
//            {
//                return null;
//            }

//            var category = await context.Categories
//                .Include(c => c.Packages) // Include related packages
//                .FirstOrDefaultAsync(c => c.CategoryId == id);

//            return category;
//        }
//    }
//}


using System.Linq;
using Microsoft.EntityFrameworkCore;
using Etour_DotNet_Backend.DTOs;
using Etour_DotNet_Backend.DbRepos;

namespace Etour_DotNet_Backend.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly ScottDbContext _context;

        public CategoryRepository(ScottDbContext context)
        {
            _context = context;
        }

        public List<CategoryDTO> GetCategoriesWithSubCategoriesAndPackages()
        {
            var categories = _context.Categories
                .Include(c => c.SubCategories)
                    .ThenInclude(sc => sc.Packages)
                .ToList();

            return categories.Select(c => new CategoryDTO
            {
                CategoryId = c.CategoryId,
                CategoryImagePath = c.CategoryImagePath,
                CategoryInfo = c.CategoryInfo,
                CategoryName = c.CategoryName,
                SubCategories = c.SubCategories.Select(sc => new SubCategoryDTO
                {
                    SubcategoryId = sc.SubcategoryId,
                    SubcategoryImgagePath = sc.SubcategoryImgagePath,
                    SubcategoryInfo = sc.SubcategoryInfo,
                    SubcategoryName = sc.SubcategoryName,
                    Packages = sc.Packages.Select(p => new PackageDTO
                    {
                        PackageId = p.PackageId,
                        PackageImagePath = p.PackageImagePath,
                        PackageInfo = p.PackageInfo,
                        PackageName = p.PackageName
                    }).ToList()
                }).ToList()
            }).ToList();
        }
    }
}

