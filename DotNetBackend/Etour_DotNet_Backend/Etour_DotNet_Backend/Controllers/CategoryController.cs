//using Etour_DotNet_Backend.DbRepos;
//using Etour_DotNet_Backend.Repository;
//using Microsoft.AspNetCore.Mvc;

//namespace Etour_DotNet_Backend.Controllers
//{
//     [ApiController]
//    [Route("/api/category")]   
//    public class CategoryController : Controller
//    {
//        private readonly ICategoryRepository categoryRepository;

//        public CategoryController(ICategoryRepository categoryRepository)
//        {
//            this.categoryRepository = categoryRepository;
//        }

//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<Category>?>> GetCategory()
//        {
//            if(await categoryRepository.getCategories() == null)
//            {
//                return NotFound();
//            }
//            return await categoryRepository.getCategories();
//        }

//        [HttpGet("{$id}")]
//        public async Task<Category> getCategoryById(int id)
//        {
//            var Category = await categoryRepository.getCategoryById(id);
//            return Category;
//        }
//    }
//}

//using Etour_DotNet_Backend.DbRepos;
//using Etour_DotNet_Backend.Repository;
//using Microsoft.AspNetCore.Mvc;
//using System.Text.Json;
//using System.Text.Json.Serialization;

//namespace Etour_DotNet_Backend.Controllers
//{
//    [ApiController]
//    [Route("/api/category")]
//    public class CategoryController : Controller
//    {
//        private readonly ICategoryRepository categoryRepository;
//        private readonly JsonSerializerOptions jsonSerializerOptions;

//        public CategoryController(ICategoryRepository categoryRepository)
//        {
//            this.categoryRepository = categoryRepository;
//            this.jsonSerializerOptions = new JsonSerializerOptions
//            {
//                ReferenceHandler = ReferenceHandler.Preserve
//            };
//        }

//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<Category>?>> GetCategory()
//        {
//            if (await categoryRepository.getCategories() == null)
//            {
//                return NotFound();
//            }
//            return Json(await categoryRepository.getCategories(), jsonSerializerOptions);
//        }

//        [HttpGet("{id}")]
//        public async Task<ActionResult<Category>> GetCategoryById(int id)
//        {
//            var category = await categoryRepository.getCategoryById(id);
//            if (category == null)
//            {
//                return NotFound();
//            }
//            return Json(category, jsonSerializerOptions);
//        }
//    }
//}



//using Etour_DotNet_Backend.DTOs;
//using Etour_DotNet_Backend.Repository;
//using Microsoft.AspNetCore.Mvc;
//using System.Collections.Generic;
//using System.Threading.Tasks;

//namespace Etour_DotNet_Backend.Controllers
//{
//    [ApiController]
//    [Route("/api/category")]
//    public class CategoryController : Controller
//    {
//        private readonly ICategoryRepository categoryRepository;

//        public CategoryController(ICategoryRepository categoryRepository)
//        {
//            this.categoryRepository = categoryRepository;
//        }

//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<CategoryDTO>>> GetCategory()
//        {
//            var categories = await categoryRepository.getCategories();
//            if (categories == null)
//            {
//                return NotFound();
//            }

//            var categoryDTOs = new List<CategoryDTO>();
//            foreach (var category in categories.Value)
//            {
//                var categoryDTO = new CategoryDTO
//                {
//                    CategoryId = category.CategoryId,
//                    CategoryImagePath = category.CategoryImagePath,
//                    CategoryInfo = category.CategoryInfo,
//                    CategoryName = category.CategoryName,
//                    Packages = new List<PackageDTO>()
//                };

//                foreach (var package in category.Packages)
//                {
//                    categoryDTO.Packages.Add(new PackageDTO
//                    {
//                        PackageId = package.PackageId,
//                        PackageImagePath = package.PackageImagePath,
//                        PackageInfo = package.PackageInfo,
//                        PackageName = package.PackageName
//                    });
//                }

//                categoryDTOs.Add(categoryDTO);
//            }

//            return categoryDTOs;
//        }

//        [HttpGet("{id}")]
//        public async Task<ActionResult<CategoryDTO>> GetCategoryById(int id)
//        {
//            var category = await categoryRepository.getCategoryById(id);
//            if (category == null)
//            {
//                return NotFound();
//            }

//            var categoryDTO = new CategoryDTO
//            {
//                CategoryId = category.CategoryId,
//                CategoryImagePath = category.CategoryImagePath,
//                CategoryInfo = category.CategoryInfo,
//                CategoryName = category.CategoryName,
//                Packages = new List<PackageDTO>()
//            };

//            foreach (var package in category.Packages)
//            {
//                categoryDTO.Packages.Add(new PackageDTO
//                {
//                    PackageId = package.PackageId,
//                    PackageImagePath = package.PackageImagePath,
//                    PackageInfo = package.PackageInfo,
//                    PackageName = package.PackageName
//                });
//            }



//            return categoryDTO;
//        }
//    }
//}


using Etour_DotNet_Backend.DbRepos;
using Etour_DotNet_Backend.DTOs;
using Etour_DotNet_Backend.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Etour_DotNet_Backend.Controllers
{
    [ApiController]
    [Route("/api/category")]
    public class CategoryController : Controller
    {
        private readonly ICategoryRepository categoryRepository;

        public CategoryController(ICategoryRepository categoryRepository)
        {
            this.categoryRepository = categoryRepository;
        }

        [HttpGet]
        public List<CategoryDTO> GetCategoriesWithSubCategoriesAndPackages()
        {
            var categories =  categoryRepository.GetCategoriesWithSubCategoriesAndPackages();

    
            return categories;
        }


    }
}
