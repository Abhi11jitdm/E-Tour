using Etour_DotNet_Backend.DbRepos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;

namespace Etour_DotNet_Backend.Repository
{
    public class PackageRepository : IPackageRepository
    {

        private readonly ScottDbContext _context;

        public PackageRepository(ScottDbContext context)
        {
            _context = context;
        }



        public async Task<Package> getPackageById(int id)
        {
            if (_context.Packages == null)
            {
                return null;
            }
            var package = await _context.Packages.FindAsync(id);
            if(package == null)
            {
                return null;
            }
            return package;
        }
        public async Task<ActionResult<IEnumerable<Package>?>> getPackages()
        {
            if (_context.Packages == null) { return null; }
            return _context.Packages.ToList();
        }

        public async Task<ActionResult<IEnumerable<Package>>> GetPackagesBySubCategoryId(int id)
        {
            var packages =  _context.Packages.FromSql($"SELECT * FROM packages where subcategory_id={id}");
            return  packages.ToList();
        }
    }
}
