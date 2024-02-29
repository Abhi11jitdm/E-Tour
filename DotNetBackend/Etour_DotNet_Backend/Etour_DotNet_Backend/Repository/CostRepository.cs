using Etour_DotNet_Backend.DbRepos;
using Microsoft.EntityFrameworkCore;

namespace Etour_DotNet_Backend.Repository
{
    public class CostRepository : ICostRepository
    {
        private readonly ScottDbContext _context;
        public CostRepository(ScottDbContext context) 
        { 
            _context = context;
        }
        public Cost GetCostByPackageId(int id)
        {
            var cost = _context.Costs.FromSql($"SELECT * FROM cost where package_id={id}").FirstOrDefault();
            return cost;
        }
    }
}
