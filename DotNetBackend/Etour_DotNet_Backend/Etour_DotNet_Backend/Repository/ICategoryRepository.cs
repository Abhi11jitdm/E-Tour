using Etour_DotNet_Backend.DbRepos;
using Etour_DotNet_Backend.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace Etour_DotNet_Backend.Repository
{
    public interface ICategoryRepository
    {
        public List<CategoryDTO> GetCategoriesWithSubCategoriesAndPackages();
    }
}
