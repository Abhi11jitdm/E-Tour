using Etour_DotNet_Backend.DbRepos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Etour_DotNet_Backend.Repository
{
    public class IternaryRepository : IIternaryRepository
    {
        private readonly ScottDbContext context;

        public IternaryRepository(ScottDbContext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<IEnumerable<Iternary>>> GetIternaryByPackId(int id)
        {
            var iternary = context.Iternaries.FromSql($"select * from iternary where package_id={id}");
            return iternary.ToList();
        }
    }
}
