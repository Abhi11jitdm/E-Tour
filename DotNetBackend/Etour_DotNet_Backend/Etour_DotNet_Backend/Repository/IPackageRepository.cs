using Etour_DotNet_Backend.DbRepos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;

namespace Etour_DotNet_Backend.Repository
{
    public interface IPackageRepository
    {
        public  Task<ActionResult<IEnumerable<Package>?>> getPackages();
        public  Task<Package> getPackageById(int id);

        public Task<ActionResult<IEnumerable<Package>>> GetPackagesBySubCategoryId(int id);
    }
}
